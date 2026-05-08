<template>
  <header class="money__header">
    <h1>Moli Money</h1>
    <nav class="money__nav">
      <ul>
        <li>
          <nuxt-link to="/record-spend">记录花费</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/update-money">修改存储金额</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import '~/assets/css/layout.scss';
.money__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;

    h1 {
        font-size: 24px;
        font-weight: var(--dashboard-font-weight-bold);
        color: var(--dashboard-font-color);
    }
}
.money__nav {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    li {
        @include aStyle();
    }
  }
}
</style>
