<template>
    <div class="loginPageContainer" @contextmenu="forbidRightClick">
        <div class="backgroundImg">
            <a-carousel autoplay>
                <div>
                    <img
                        src="../../assets/login-page/校园风景4.jpg"
                        alt="校园风景"
                    />
                </div>
                <div>
                    <img
                        src="../../assets/login-page/校园风景3.jpg"
                        alt="校园风景"
                    />
                </div>
                <div>
                    <img
                        src="../../assets/login-page/校园风景2.jpg"
                        alt="校园风景"
                    />
                </div>
                <div>
                    <img
                        src="../../assets/login-page/校园风景1.jpg"
                        alt="校园风景"
                    />
                </div>
            </a-carousel>
        </div>
        <div class="administratorInfo">
            <div class="title">
                <div class="title_pic">
                    <img
                        src="../../assets/login-page/课题组218.png"
                        alt="背景图"
                    />
                </div>
                <h1 class="title_name">MASS人为风险分析系统</h1>
            </div>
            <div class="logoinForm">
                <a-tabs class="tabs">
                    <a-tab-pane key="1" tab="登录">
                        <div class="inputDiv">
                            <a-input
                                v-model:value="loginForm.account"
                                size="large"
                                placeholder="请输入用户名"
                                allow-clear
                                ><template #prefix>
                                    <user-outlined type="user" /></template
                            ></a-input>
                        </div>
                        <div class="inputDiv">
                            <a-input
                                v-model:value="loginForm.password"
                                size="large"
                                placeholder="请输入密码"
                                allow-clear
                                ><template #prefix>
                                    <lock-outlined type="lock" /></template
                            ></a-input>
                        </div>
                        <div class="inputDiv">
                            <a-button
                                @click="login"
                                size="large"
                                type="primary"
                                block
                                >登录</a-button
                            >
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="注册" force-render>
                        <div class="inputDiv">
                            <a-input
                                v-model:value="regForm.account"
                                size="large"
                                placeholder="请输入用户名"
                                allow-clear
                                ><template #prefix>
                                    <user-outlined type="user" /></template
                            ></a-input>
                        </div>
                        <div class="inputDiv">
                            <a-input
                                v-model:value="regForm.password"
                                size="large"
                                placeholder="请输入密码"
                                allow-clear
                                ><template #prefix>
                                    <lock-outlined type="lock" /></template
                            ></a-input>
                        </div>
                        <div class="inputDiv">
                            <a-input
                                v-model:value="regForm.inviteCode"
                                size="large"
                                placeholder="请输入邀请码"
                                allow-clear
                                ><template #prefix>
                                    <mail-outlined type="mail" /></template
                            ></a-input>
                        </div>
                        <div class="inputDiv">
                            <a-button
                                @click="register"
                                size="large"
                                type="primary"
                                block
                                >注册</a-button
                            >
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="微信小程序" force-render
                        ><img
                            class="wechat"
                            src="../../assets/login-page/wechat.jpg"
                            alt="微信二维码"
                    /></a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "./index.scss";
@import "./fix.css";
</style>