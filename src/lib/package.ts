// generated by src/lib/package.gen.ts

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_code',
	description: 'syntax highlighting using prismjs for Svelte, SvelteKit, TypeScript, and Fuz',
	version: '0.4.0',
	license: 'MIT',
	type: 'module',
	homepage: 'https://code.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_code',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.76.0',
		'@fuz.dev/fuz_library': '^0.16.2',
		'@grogarden/gro': '^0.98.1',
		'@grogarden/util': '^0.15.2',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.2',
		'@sveltejs/package': '^2.2.2',
		'@types/prismjs': '^1.26.2',
		'@typescript-eslint/eslint-plugin': '^6.9.1',
		'@typescript-eslint/parser': '^6.9.1',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Code.svelte': {
			svelte: './dist/Code.svelte',
			default: './dist/Code.svelte',
			types: './dist/Code.svelte.d.ts',
		},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
		'./prism.css': {default: './dist/prism.css'},
		'./remove_prism_css_vite_plugin.js': {
			default: './dist/remove_prism_css_vite_plugin.js',
			types: './dist/remove_prism_css_vite_plugin.d.ts',
		},
	},
	modules: {
		'./Code.svelte': {path: 'Code.svelte', declarations: []},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
		'./prism.css': {path: 'prism.css', declarations: []},
		'./remove_prism_css_vite_plugin.js': {
			path: 'remove_prism_css_vite_plugin.ts',
			declarations: [{name: 'remove_prism_css', kind: 'VariableDeclaration'}],
		},
	},
} satisfies PackageJson;

// generated by src/lib/package.gen.ts
