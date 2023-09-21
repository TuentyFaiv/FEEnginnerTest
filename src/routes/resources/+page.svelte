<script lang="ts">
  import { page } from "@resources/styles";

  import { SEO } from "@sharing/atoms";

  const icons = [
    // <a target="_blank" href="https://icons8.com/icon/LoL4bFzqmAa0/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    {
      href: "https://icons8.com/icon/LoL4bFzqmAa0/github",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "GitHub",
    },
    // <a target="_blank" href="https://icons8.com/icon/pLZJDz39uxYt/iconizer">iconizer</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    {
      href: "https://icons8.com/icon/pLZJDz39uxYt/iconizer",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "iconizer",
    },
    // <a target="_blank" href="https://icons8.com/icon/462s2UshuLPT/filtrar">Filtrar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    {
      href: "https://icons8.com/icon/462s2UshuLPT/filtrar",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "Filtrar",
    },
    // <a target="_blank" href="https://icons8.com/icon/ObuWtTlsoTj6/b%C3%BAsqueda">Búsqueda</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    {
      href: "https://icons8.com/icon/ObuWtTlsoTj6/b%C3%BAsqueda",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "Búsqueda",
    },
  ];

  const fonts = [
    {
      href: "https://fontsource.org/fonts/inter",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "Inter",
    },
  ];
</script>

<SEO title="Resources" />

<section class={page.resources}>
  <h1 class={page.title}>Resources that helped me</h1>
  <h2 class={page.subtitle}>
    Icons used in this project by
    <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
      Icons8:
    </a>
    <ul class={page.list}>
      {#each icons as { href, text, ...props }}
        <li class={page.item}>
          <a {href} class={page.link} {...props}>
            {text}
          </a>
        </li>
      {/each}
    </ul>
  </h2>
  <h2 class={page.subtitle}>
    Fonts used in this project by
    <a target="_blank" rel="noopener noreferrer" href="https://fontsource.org">
      Fontsource:
    </a>
    <ul class={page.list}>
      {#each fonts as { href, text, ...props }}
        <li class={page.item}>
          <a {href} class={page.link} {...props}>
            {text}
          </a>
        </li>
      {/each}
    </ul>
  </h2>
</section>
