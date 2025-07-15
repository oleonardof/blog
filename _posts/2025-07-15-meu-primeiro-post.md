---
layout: default
title: Meu Primeiro Post
date: 2025-07-15
---
<div class="container mx-auto px-4 py-20">
  <h1 class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">{{ page.title }}</h1>
  <p class="text-gray-600 dark:text-gray-400 mb-4">{{ page.date | date: "%d/%m/%Y" }}</p>
  <div class="prose dark:prose-invert">
    Este é o meu primeiro post no blog. Aqui, compartilho insights sobre análise de dados, projetos em Python, SQL, Power BI e muito mais.
  </div>
</div>
