import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});

const eslintConfig = [
	{
		ignores: [
			'node_modules',
			'.next',
			'dist',
			'build',
			'public',
			'src/**/*.test.ts'
		] // Игнорируемые пути
	},
	...compat.extends(
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'next/core-web-vitals',
		'next/typescript',
		'prettier'
	),
	{
		files: ['**/*.{js,jsx,ts,tsx}'], // Указание типов файлов
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			'simple-import-sort': simpleImportSort,
			prettier: prettierPlugin,
			react: reactPlugin
		},
		rules: {
			'prettier/prettier': 'error', // Подключение правил Prettier
			'react/react-in-jsx-scope': 'off', // Отключение правила, неактуального для Next.js
			'react/jsx-props-no-spreading': 'off', // Разрешение использования JSX-пропсов
			'simple-import-sort/imports': 'error', // Автоматическая сортировка импортов
			'simple-import-sort/exports': 'error', // Автоматическая сортировка экспортов
			'import/order': 'off',
			eqeqeq: 'warn',
			strict: 'off',
			'react/no-set-state': 'off',
			'no-console': 'warn',
			'import/named': 2,
			'import/namespace': 2,
			'import/default': 2,
			'import/export': 2,
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-require-imports': 'off', // ✅ Отключаем правило
			'@typescript-eslint/no-unused-vars': 'warn' // ✅ Отключаем правило
		},
		settings: {
			react: {
				version: 'detect' // Автоматическое определение версии React
			}
		}
	}
];

export default eslintConfig;
