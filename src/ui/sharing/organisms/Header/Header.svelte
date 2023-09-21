<script lang="ts">
  import * as styles from "./Header.styles";

  import logo from "@icons/svelte-logo.svg";
</script>

<header class={styles.header}>
  <a class={styles.corner} href="https://kit.svelte.dev/docs/introduction">
    <img src={logo} alt="SvelteKit" />
  </a>
</header>
