rg --files docs packages/angular-hovercraft/src | entr npm run typedoc -- --out out-docs --exclude '**/{internal,utils,node_modules}/**/*' --mode modules --options typedoc.json --theme packages/custom-typedoc-theme/bin/default --includes ./docs --readme ./README.md ./packages/angular-hovercraft/src/