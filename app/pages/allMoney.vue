<template>
    <div>
        <h1>总额页面</h1>
        <p>这里是总额内容</p>
        <div class="links">
            <nuxt-link to="/">返回首页</nuxt-link>
            <nuxt-link to="/spend">跳转到花费页面</nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.links {
    margin-top: 20px;
}

.links a {
    display: inline-block;
    margin-right: 15px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}
</style>