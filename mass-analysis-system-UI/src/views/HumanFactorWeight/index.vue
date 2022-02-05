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
                <template #weightOfBerthStage="{ record }">
                    {{ toPercent(record.weightOfBerthStage) }}
                </template>
                <template #weightRankingOfBerthStage="{ record }">
                    <span>
                        <a-tag
                            :color="
                                record.weightRankingOfBerthStage === '1' ||
                                record.weightRankingOfBerthStage === '2' ||
                                record.weightRankingOfBerthStage === '3'
                                    ? 'volcano'
                                    : 'green'
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
                                record.weightRankingOfInboundAndOutbound ===
                                    '1' ||
                                record.weightRankingOfInboundAndOutbound ===
                                    '2' ||
                                record.weightRankingOfInboundAndOutbound === '3'
                                    ? 'volcano'
                                    : 'green'
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
                                record.weightRankingOfCoastal === '1' ||
                                record.weightRankingOfCoastal === '2' ||
                                record.weightRankingOfCoastal === '3'
                                    ? 'volcano'
                                    : 'green'
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
                            :color="
                                record.generalWeightRanking === '1' ||
                                record.generalWeightRanking === '2' ||
                                record.generalWeightRanking === '3'
                                    ? 'volcano'
                                    : 'green'
                            "
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