<template>
  <header class="money__header">
    <h1>Moli Money</h1>
    <nav class="money__nav">
      <ul>
        <li>
          <nuxt-link to="/spend">花费</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/allMoney">总额</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">

.money__header {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.money__nav {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    li {
        a {
            color: var(--light-primary);
            text-decoration: none;

            &:hover {
                color: var(--light-primary-hover);
            }
        }
    }
  }
}
</style>
