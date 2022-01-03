<template>
    <a-layout>
        <a-layout-sider
            class="leftLayout"
            breakpoint="lg"
            collapsed-width="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
        >
            <div class="leftLayout_header">
                <h1>MASS人为风险分析系统</h1>
            </div>
            <a-menu
                theme="dark"
                mode="inline"
                v-model:selectedKeys="selectedKeys"
            >
                <a-menu-item key="1">
                    <edit-outlined />
                    <span class="nav-text">船舶事故录入</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <video-camera-outlined />
                    <span class="nav-text">nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span class="nav-text">nav 3</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <user-outlined />
                    <span class="nav-text">nav 4</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout class="rightLayout">
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <div class="rightLayout_header">
                    <img
                        src="../../assets/login-page/课题组218.png"
                        alt="logo"
                    />
                    <div class="welcome">
                        你好，<span>XX</span>
                        <a-button class="logout" type="dashed" size="small">
                            退出
                        </a-button>
                    </div>
                </div>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div
                    :style="{
                        padding: '24px',
                        background: '#fff',
                        minHeight: '360px',
                    }"
                >
                    <router-view />
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                MASS Analysis System Created by KETIZU218
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script src="./index.js" ></script>
<style lang="scss" scoped>
@import "./index.scss";
@import "./fix.css";
</style>>
