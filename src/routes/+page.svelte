<script lang="ts">
	import Library_Header from '@fuz.dev/fuz_library/Library_Header.svelte';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {base} from '$app/paths';

	import Code_Tome from '$routes/Code_Tome.svelte';
	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section>
			<Library_Header {pkg} />
		</section>
		<section>
			<Code_Tome />
		</section>
		<section class="box">
			<a href="{base}/about" class="chip">about</a>
		</section>
		<section>
			<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	main {
		/* TODO hacky */
		margin-bottom: var(--spacing_5);
		padding: var(--spacing_3) 0;
	}
	section {
		margin-bottom: var(--spacing_5);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
