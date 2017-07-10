import * as acorn from 'acorn';

namespace plugin {
	// SystemJS.import('uglify-js');

	export function translate(load: ILoad): string {
		if (typeof window !== 'undefined') {
			return load.source;
		}

		if (load.name.search(/module\.js$/i) === -1) {
			console.log(
				`>>> [${load.metadata.loader}]:Warning:` + 
				'This plugin should only be used for Angular modules, with ' +
				'filename ending in ".module.js"'
			);
		}

		// console.log(fs.existsSync('./package.json'));

		const ast = acorn.parse(load.source);
		console.log(ast);

		// console.log(this);
		return load.source;
	}

	function instantiate(load: ILoad, defaultInstantiate: Instantiate): string {
		return defaultInstantiate(load);
	}

	function locate(load: ILoad): string {
		return load.address;
	}
}

export = plugin;

interface ILoad {
	name: string,
	address: string,
	source: string,
	metadata: {
		cjsDeferDepsExecute: boolean,
		cjsRequireDetection: boolean,
		crossOrigin: any,
		deps: string[],
		encapsulateGlobal: boolean,
		esModule: boolean,
		extension: string,
		format: string,
		globals: any,
		loader: string,
		sourceMap: string
	}
}

interface Instantiate {
	(load: ILoad): string
}
