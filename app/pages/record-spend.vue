<template>
    <div class="record-spend">
        <div class="record-spend__top">
            <nuxt-link to="/">返回首页</nuxt-link>
        </div>

        <div class="record-spend__content">
            <div class="form-item">
                <h3>记录花费</h3>
            </div>

            <div class="form-item">
                <label for="spend-date">花费日期:</label>
                <input type="date" id="spend-date" name="spend-date" required>
            </div>
            <div class="form-item">
                <label for="spend-amount">花费金额:</label>
                <input type="number" id="spend-amount" name="spend-amount" required>
            </div>
            <div class="form-item">
                <button type="submit">记录</button>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@import '~/assets/css/layout.scss';

.record-spend {
    @include layoutStyle();

    &__top {
        padding-top: 10px;
        padding-left: 10px;
        @include aStyle();
    }

    &__content {
        width: 400px;
        height: calc(100% - 60px);
        margin: auto;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>