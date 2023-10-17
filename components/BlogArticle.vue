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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z" stroke="#A0B6B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        35
      </span>
      <span class="blog-article__icon-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2.036 12.322C1.96698 12.1146 1.96698 11.8904 2.036 11.683C3.423 7.51 7.36 4.5 12 4.5C16.638 4.5 20.573 7.507 21.963 11.678C22.033 11.885 22.033 12.109 21.963 12.317C20.577 16.49 16.64 19.5 12 19.5C7.362 19.5 3.426 16.493 2.036 12.322Z" stroke="#A0B6B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" stroke="#A0B6B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        117
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