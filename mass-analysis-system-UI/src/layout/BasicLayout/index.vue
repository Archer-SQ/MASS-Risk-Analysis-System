<template>
    <a-layout>
        <a-layout-sider class="leftLayout" breakpoint="lg" collapsed-width="0">
            <div class="leftLayout_header">
                <h1>MASS人为风险分析系统</h1>
            </div>
            <a-menu
                theme="dark"
                mode="inline"
                v-model:selectedKeys="selectedKeys"
            >
                <a-menu-item key="1" @click="to('/')">
                    <home-outlined />
                    <span class="nav-text">首页</span>
                </a-menu-item>
                <a-menu-item key="2" @click="to('/incidents')">
                    <form-outlined />
                    <span class="nav-text">船舶事故录入</span>
                </a-menu-item>
                <a-menu-item key="3" @click="to('/humanFactor')">
                    <pie-chart-outlined />
                    <span class="nav-text">人为因素权重</span>
                </a-menu-item>
                <a-menu-item
                    v-if="role === 'admin'"
                    key="4"
                    @click="to('/inviteCode')"
                >
                    <number-outlined />
                    <span class="nav-text">邀请码管理</span>
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
                        {{ accountName }}&nbsp;&nbsp;&nbsp;{{ sayHello() }}
                        <a-button
                            class="logout"
                            type="dashed"
                            size="small"
                            @click="showConfirm"
                        >
                            退出
                        </a-button>
                    </div>
                </div>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <router-view />
            </a-layout-content>
            <a-layout-footer
                style="text-align: center; word-spacing: 6px; padding: 0 50px"
            >
                System Created by KETIZU218
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script src="./index.js" ></script>
<style lang="scss" scoped>
@import "./index.scss";
@import "./fix.css";
</style>>
