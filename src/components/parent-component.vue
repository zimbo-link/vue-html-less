<template>
    <h1>Canvas</h1>
    <less-render ref="canvas" />
    <div style="margin: 10px">
        <h1>Editor</h1>
        <child-component v-on:change-html="changeHtml" />
    </div>
</template>

<style lang="less">
    @bgColor: #f1f1f1;
    #app {
        background: @bgColor;
        font-size: 100%;
    }
</style>

<script>
import ChildComponent from "./child-component";
export default {
    name: "ParentComponent",
    components: {
        ChildComponent,
    },
    data() {
        return {};
    },

    methods: {
        changeHtml(tmpl) {
            this.$refs.canvas.html(tmpl);
        },
    },
};
</script>
