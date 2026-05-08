<script setup lang="ts">
import Header from '../components/header.vue';

</script>

<template>
  <div class="app">
    <Header />

    <!-- 仪表盘 -->
    <div class="layout-panel">
      <div class="dashboard__container">
        <div class="dashboard__flex-item">
          <div class="dashboard__flex-item__top">
            总金额
          </div>
          <div class="dashboard__flex-item__bottom">
            5000RMB
          </div>
        </div>

        <div class="dashboard__flex-item">
          <div class="dashboard__flex-item__top">
            本月花费单数
          </div>
          <div class="dashboard__flex-item__bottom">
            5000RMB
          </div>
        </div>

        <div class="dashboard__flex-item">
          <div class="dashboard__flex-item__top">
            目标节省金额
          </div>
          <div class="dashboard__flex-item__bottom">
            5000RMB
          </div>
        </div>

        <div class="dashboard__flex-item">
          <div class="dashboard__flex-item__top">
            自身评定
          </div>
          <div class="dashboard__flex-item__bottom">
            A
          </div>
        </div>
      </div>
    </div>

  </div>

</template>


<style lang="scss">
@import '~/assets/css/layout.scss';


.app {
    @include layoutStyle();
}

.nuxt_app_main {
  background-color: var(--light-primary);
}

.layout-panel {
  height: calc(100% - 50px);
}
.dashboard__container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;


  .dashboard__flex-item {
    min-width: 100px;
    padding: 10px;
    border: 1px solid var(--light-border-primary);
    border-radius: var(--dashboard-border-radius);
    display: flex;
    flex-direction: column-reverse;
    gap: 5px;
    &__top {
      font-size: var(--dashboard-font-size);
      color: var(--dashboard-font-color);
    }

    &__bottom {
      font-size: var(--dashboard-font-size-bottom);
      font-weight: var(--dashboard-font-weight-bold);
      color: var(--dashboard-font-color);
    }

    &__top,
    &__bottom {
      text-align: center;
    }
  }
}
</style>