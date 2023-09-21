<script lang="ts">
	// Supports weights 100-900
	import "@fontsource-variable/inter";
	import { layout } from "@styles";

	import { Footer, Header } from "@sharing/organisms";
</script>

<Header />

<main class={layout.main}>
	<slot />
</main>

<Footer />
