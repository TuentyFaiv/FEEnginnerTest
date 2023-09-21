<script lang="ts">
  import * as styles from "./Footer.styles";

  import IconGitHub from "@icons/icon-github.png";
  import IconResources from "@icons/icons-resources.png";

  const links = [
    {
      href: "https://github.com/TuentyFaiv",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "My GitHub",
      icon: IconGitHub,
    },
    {
      href: "/resources",
      text: "Resources that helped me",
      icon: IconResources,
    },
  ];
</script>

<footer class={styles.footer}>
  <div class={styles.container}>
    <ul class={styles.list}>
      {#each links as { href, text, icon: src, ...props }}
        <li class={styles.item}>
          <a {href} class={styles.link} {...props}>
            <img class={styles.icon} {src} alt={text} />
            {text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>
