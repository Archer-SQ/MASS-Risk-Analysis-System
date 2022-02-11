<template>
    <div>
        <a-card
            class="humanFactorList"
            :headStyle="headStyle"
            style="width: 100%"
            title="人为因素权重"
            :tab-list="tabList"
            :active-tab-key="key"
            @tabChange="(key) => onTabChange(key)"
        >
            <template #extra
                ><a-button
                    class="addHumanFactorButton"
                    type="primary"
                    @click="showAddHumanFactorDialog = true"
                    >新增</a-button
                ></template
            >
            <a-table
                :columns="columns"
                :data-source="humanFactorList"
                :scroll="{ y: 300 }"
                :pagination="pagination"
                size="small"
                bordered
            >
                <template #serialNumber="data">
                    <a-badge
                        :count="data.record.serialNumber"
                        :number-style="{
                            backgroundColor: '#fff',
                            color: '#999',
                            boxShadow: '0 0 0 1px #d9d9d9 inset',
                        }"
                    />
                </template>
                <template #weightOfBerthStage="{ record }">
                    {{ toPercent(record.weightOfBerthStage) }}
                </template>
                <template #weightRankingOfBerthStage="{ record }">
                    <span>
                        <a-tag
                            :color="
                                highlightSort(record.weightRankingOfBerthStage)
                            "
                        >
                            {{ record.weightRankingOfBerthStage }}
                        </a-tag>
                    </span>
                </template>
                <template #weightOfInboundAndOutbound="{ record }">
                    {{ toPercent(record.weightOfInboundAndOutbound) }}
                </template>
                <template #weightRankingOfInboundAndOutbound="{ record }">
                    <span>
                        <a-tag
                            :color="
                                highlightSort(
                                    record.weightRankingOfInboundAndOutbound
                                )
                            "
                        >
                            {{ record.weightRankingOfInboundAndOutbound }}
                        </a-tag>
                    </span>
                </template>
                <template #weightOfCoastal="{ record }">
                    {{ toPercent(record.weightOfCoastal) }}
                </template>
                <template #weightRankingOfCoastal="{ record }">
                    <span>
                        <a-tag
                            :color="
                                highlightSort(record.weightRankingOfCoastal)
                            "
                        >
                            {{ record.weightRankingOfCoastal }}
                        </a-tag>
                    </span>
                </template>
                <template #generalWeight="{ record }">
                    {{ toPercent(record.generalWeight) }}
                </template>
                <template #generalWeightRanking="{ record }">
                    <span>
                        <a-tag
                            :color="highlightSort(record.generalWeightRanking)"
                        >
                            {{ record.generalWeightRanking }}
                        </a-tag>
                    </span>
                </template>
            </a-table>
        </a-card>
        <add-human-factor
            v-model:show="showAddHumanFactorDialog"
            :parentGetList="getList"
        />
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "./index.scss";
@import "./fix.css";
</style>