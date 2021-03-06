pkg="angular-skyhook"

usage () {
  echo "usage: $0 [--serve] [--serve-only] [--no-examples] [--port <default is 8080>]"
}

SERVE=0
SERVE_ONLY=0
EXAMPLES=1
THEME=1
TRAVIS=0
PORT=8080

while [ "$1" != "" ]; do
    case $1 in
        -h | --help)
            usage
            exit
            ;;
        --travis)
            TRAVIS=1
            SERVE=0
            SERVE_ONLY=0
            EXAMPLES=1
            THEME=1
            break
            ;;
        --serve)
            SERVE=1
            ;;
        --serve-only)
            SERVE_ONLY=1
            ;;
        --no-examples)
            EXAMPLES=0
            ;;
        --no-theme)
            THEME=0
            ;;
        --port)
            PORT=$2
            shift
            ;;
        *)
            echo "ERROR: unknown parameter \"$1\""
            usage
            exit 1
            ;;
    esac
    shift
done


EXAMPLES_TASK="local-docs"
if [[ $TRAVIS == 1 ]]; then
  EXAMPLES_TASK="gh-pages"
fi

if [[ $SERVE_ONLY == "1" ]]; then
    echo "serving ./out-docs/ on http://localhost:$PORT"
    (cd ./out-docs && python3 -m http.server $PORT)
    exit
fi

fail () {
    echo "failed on: $@"
    echo "exiting"
    exit 1
}

DIR=$(dirname "$0")
output="$DIR/out-docs"
skyhook="$DIR/packages/angular-skyhook"
multi_backend="$DIR/packages/angular-skyhook-multi-backend"
examples="$DIR/packages/examples"

yarn || fail "yarn install"

rm -rf out-docs
rm -rf "$skyhook/documentation"

(cd "$skyhook" && yarn run docs) || fail "build main docs"

(mv "$skyhook/documentation" "$output") || fail "move main docs into output"

(cd $multi_backend && yarn run docs) || fail "build multi-backend docs"

(mv "$multi_backend/documentation" "$output/angular-skyhook-multi-backend") || fail "move multi-backend into output"

if [[ $EXAMPLES == 1 ]]; then
    (cd "$examples" && yarn run $EXAMPLES_TASK) || fail "build examples"
    (mv "$examples/dist/examples" "$output/examples") || fail "move examples into output"
fi

echo "built successfully"

if [[ $? ]]; then
  if [[ $SERVE == "1" ]]; then
    echo "serving ./out-docs/ on http://localhost:$PORT"
    (cd out-docs && python3 -m http.server $PORT)
  fi
else
  echo "failed :("
fi

