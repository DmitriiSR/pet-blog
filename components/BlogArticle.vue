<template>
  <article class="blog-article">
    <header class="blog-article__author">
      <UiAvatar class="mr-2"/>
      Dmitriy Ryabukhin
    </header>
    <div class="blog-article__main">
      <h2 class="blog-article__title"><a href="/article/123">Малоизвестный пакет Go, который пригодится при выполнении SQL-миграций</a></h2>
      <p class="blog-article__description">Пакет embed, который появился в Go 1.16, предоставляет возможность встраивать файлы и каталоги в бинарные файлы Go. Предлагаем узнать, как этот пакет используется для встраивания файлов миграции SQL в бинарный файл.</p>
    </div>
    <div class="divider"></div>
    <footer class="blog-article__footer">
      <span class="blog-article__icon-info">
        <IconsBase><IconsLike/></IconsBase>35
      </span>
      <span class="blog-article__icon-info">
        <IconsBase><IconsEye/></IconsBase>117
      </span>
      <span class="blog-article__date">17.10.2023</span>
    </footer>
  </article>
</template>

<script setup lang="ts">
</script>

<style scoped>
.blog-article {
  border-radius: 15px;
  box-shadow: 0 5px 25px 0 rgba(121, 123, 174, 0.10);

  @apply bg-sys-white w-8/12 mx-auto p-6 border-2 border-sys-light-green
}

.blog-article:nth-child(n+2) {
  @apply mt-5
}

.blog-article__title {
  @apply font-bold text-2xl mb-6
}

.blog-article__author {
  @apply flex mb-4
}

.blog-article__main {
  @apply pb-4
}

.blog-article__description {
  @apply text-sys-dark-grey
}

.blog-article__footer {
  @apply pt-4 flex
}

.blog-article__icon-info {
  @apply flex text-sys-grey
}

.blog-article__icon-info:nth-child(n+2) {
  @apply ml-6
}

.blog-article__icon-info svg {
  @apply mr-1
}

.blog-article__date {
  @apply ml-auto text-sys-grey
}
</style>