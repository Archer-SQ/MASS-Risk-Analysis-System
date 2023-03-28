<template>
    <div>
        <a-drawer
            title="MASS人为风险评估"
            :width="720"
            :visible="props.show"
            :body-style="{ paddingBottom: '80px' }"
            @close="handleClose"
        >
            <div class="assessment">
                <a-tree-select
                    v-model:value="humanFactors"
                    style="width: 85%"
                    :tree-data="treeDataFactors"
                    tree-checkable
                    allow-clear
                    placeholder="请选择需要评估的人为因素"
                />
                <a-button
                    type="primary"
                    @click="handleClick"
                    :disabled="!humanFactors.length"
                    >开始评估</a-button
                >
            </div>
            <a-space v-if="loading" class="loading">
                <a-spin size="large" :spinning="loading" />
                <a-spin size="large" :spinning="loading" />
                <a-spin size="large" :spinning="loading" />
            </a-space>
            <a-timeline v-if="!loading">
                <a-timeline-item v-for="item in analysisArr" :key="item.id">
                    <a-tag
                        :color="
                            item.generalWeightRanking <= 10 ? 'red' : 'blue'
                        "
                    >
                        {{ item.humanFactorName }}</a-tag
                    >
                    所产生的人为风险综合权重为
                    <a-tag
                        :color="
                            item.generalWeightRanking <= 10 ? 'red' : 'blue'
                        "
                        >{{ item.generalWeight }}%</a-tag
                    >，排在第
                    <a-tag
                        :color="
                            item.generalWeightRanking <= 10 ? 'red' : 'blue'
                        "
                        >{{ item.generalWeightRanking }} </a-tag
                    >位
                </a-timeline-item>
                <a-timeline-item
                    v-if="analysisArr[0] !== undefined"
                    :color="
                        totalWeight > 20 || tenArr.length > 5 ? 'red' : 'green'
                    "
                >
                    上述导致MASS发生事故的人为因素综合权重总和为
                    <a-tag :color="totalWeight > 20 ? 'red' : 'green'">
                        {{ totalWeight.toFixed(2) }}%
                    </a-tag>
                    ，其中权重排在前10的人为风险因素有<a-tag
                        :color="tenArr.length > 5 ? 'red' : 'green'"
                    >
                        {{ tenArr.length }}
                    </a-tag>
                    个，注意做好相应的安全预防措施
                </a-timeline-item>
            </a-timeline>
        </a-drawer>
    </div>
</template>
<script src='./index.js'></script>
<style lang="scss" scoped>
@import "./fix.css";
</style>