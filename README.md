# :zap: Svelte Tailwind SSR

* Sveltejs kit used with Tailwind CSS to display country API data
* Code by [Ilia Mikhailov of Codechips.me](https://codechips.me/) - see [:clap: Inspiration](#clap-inspiration) below. Some minor changes due to deprecations & commenting
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/svelte-tailwind-ssr?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/svelte-tailwind-ssr?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/svelte-tailwind-ssr?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/svelte-tailwind-ssr?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Svelte Rollup Crypto](#zap-svelte-rollup-crypto)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* App bootstrapped with Create Snowpack App (CSA)
* Displays random Github user details
* Note: Rxjs 'combineLatest' is deprecated - replaced with combineLatestWith
* `JSON.stringify()` method used to convert a JavaScript object to a JSON string

## :camera: Screenshots

![Frontend screenshot](./imgs/users.png)

## :signal_strength: Technologies

* [Snowpack](https://www.snowpack.dev/) frontend build tool, alternative to webpack or Parcel etc.
* [Sveltejs/kit v3](https://kit.svelte.dev/) fast front-end UI library with small bundles of highly-optimized vanilla JavaScript & declarative transitions. Does not use a virtual DOM.
* [rxjs](https://rxjs.dev/) Reactive Extensions JS library
* [rxjs/ajax] used to fetch Github API observable
* [Github REST API v2](https://docs.github.com/en/rest/reference/users) RESTful API with data on all world countries. [Get a Github access token](https://github.com/settings/tokens) so API access not limited

## :floppy_disk: Setup

* `npm i` to install dependencies
* `npm start` to run dev server on port `localhost:8080`
* `npm run build` to build a static copy of app to a `build/` folder

## :wrench: Testing

* N/A

## :computer: Code Examples

* N/A

## :cool: Features

* N/A

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Add more commenting and change code

## :clap: Inspiration - code by Ilia Mikhailov

* [Ilia Mikhailov: Recreating a classic FRP tutorial with Svelte and RxJS](https://codechips.me/classic-frp-tutorial-with-svelte-rxjs-6/)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
