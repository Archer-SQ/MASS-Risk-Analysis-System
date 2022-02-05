<template>
    <div>
        <a-card
            title="邀请码列表"
            :headStyle="headStyle"
            class="inviteCodeList"
        >
            <template #extra
                ><a-input-number
                    id="inputNumber"
                    class="inviteCodeCount"
                    :min="1"
                    :max="10"
                    v-model:value="inviteCodeCount"
                    placeholder="请输入创建邀请码的个数"
                /><a-button
                    class="addEvent"
                    type="primary"
                    @click="createInviteCode"
                    >创建邀请码</a-button
                ></template
            >
            <a-divider style="margin: 0"></a-divider>
            <a-table
                :columns="columns"
                :data-source="inviteCodeList"
                :scroll="{ y: 300 }"
                :pagination="pagination"
            >
                <template #used="data">
                    {{ isUsed(data.record.user) }}
                </template>
                <template #deleteInviteCode="data"
                    ><a-button type="primary" danger @click="deleteInviteCode(data.record._id)">删除</a-button>
                </template>
            </a-table>
        </a-card>
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss">
@import "./index.scss";
@import "./fix.css";
</style>