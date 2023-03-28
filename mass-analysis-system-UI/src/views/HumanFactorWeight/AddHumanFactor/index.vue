<template>
    <div>
        <a-modal
            class="addHumanFactor"
            :visible="props.show"
            title="添加船舶事故数据"
            @cancel="handleClose"
            @ok="submit"
        >
            <a-form
                :label-col="{ span: 10 }"
                :wrapper-col="{ span: 18 }"
                ref="formRef"
                :rules="rules"
                :model="addHumanFactorForm"
            >
                <a-form-item label="所属控制行为" name="controllingBehavior">
                    <a-tree-select
                        style="width: 100%"
                        :tree-data="treeDataBehavior"
                        v-model:value="addHumanFactorForm.controllingBehavior"
                        placeholder="请选择所属控制行为"
                        allow-clear
                    />
                </a-form-item>
                <a-form-item label="人为因素名称" name="humanFactorName">
                    <a-input
                        placeholder="请输入人为因素的名称"
                        v-model:value="addHumanFactorForm.humanFactorName"
                        allow-clear
                    />
                </a-form-item>
                <a-form-item
                    label="泊位作业阶段所占权重"
                    name="weightOfBerthStage"
                >
                    <a-input-number
                        v-model:value="addHumanFactorForm.weightOfBerthStage"
                        placeholder="请输入权重"
                        style="width: 100%"
                        :min="0"
                        :max="100"
                        :step="0.01"
                        :precision="2"
                        :formatter="(value) => `${value}${value ? '%' : ''}`"
                        :parser="(value) => value.replace('%', '')"
                    />
                </a-form-item>
                <a-form-item
                    label="泊位作业阶段权重排序"
                    name="weightRankingOfBerthStage"
                >
                    <a-input-number
                        placeholder="请输入排序结果"
                        v-model:value="
                            addHumanFactorForm.weightRankingOfBerthStage
                        "
                        style="width: 100%"
                        :min="1"
                        :max="30"
                    />
                </a-form-item>
                <a-form-item
                    label="进出港航行阶段所占权重"
                    name="weightOfInboundAndOutbound"
                >
                    <a-input-number
                        placeholder="请输入权重"
                        v-model:value="
                            addHumanFactorForm.weightOfInboundAndOutbound
                        "
                        style="width: 100%"
                        :min="0"
                        :max="100"
                        :step="0.01"
                        :formatter="(value) => `${value}${value ? '%' : ''}`"
                        :parser="(value) => value.replace('%', '')"
                    />
                </a-form-item>
                <a-form-item
                    label="进出港航行阶段权重排序"
                    name="weightRankingOfInboundAndOutbound"
                >
                    <a-input-number
                        placeholder="请输入排序结果"
                        v-model:value="
                            addHumanFactorForm.weightRankingOfInboundAndOutbound
                        "
                        style="width: 100%"
                        :min="1"
                        :max="30"
                    />
                </a-form-item>
                <a-form-item
                    label="沿海水域航行阶段所占权重"
                    name="weightOfCoastal"
                >
                    <a-input-number
                        placeholder="请输入权重"
                        v-model:value="addHumanFactorForm.weightOfCoastal"
                        style="width: 100%"
                        :min="0"
                        :max="100"
                        :step="0.01"
                        :formatter="(value) => `${value}${value ? '%' : ''}`"
                        :parser="(value) => value.replace('%', '')"
                    />
                </a-form-item>
                <a-form-item
                    label="沿海水域航行阶段权重排序"
                    name="weightRankingOfCoastal"
                >
                    <a-input-number
                        placeholder="请输入排序结果"
                        v-model:value="
                            addHumanFactorForm.weightRankingOfCoastal
                        "
                        style="width: 100%"
                        :min="1"
                        :max="30"
                    />
                </a-form-item>
                <a-form-item label="综合权重" name="generalWeight">
                    <a-input-number
                        placeholder="请输入权重"
                        v-model:value="addHumanFactorForm.generalWeight"
                        style="width: 100%"
                        :min="0"
                        :max="100"
                        :step="0.01"
                        :formatter="(value) => `${value}${value ? '%' : ''}`"
                        :parser="(value) => value.replace('%', '')"
                    />
                </a-form-item>
                <a-form-item label="综合权重排序" name="generalWeightRanking">
                    <a-input-number
                        placeholder="请输入排序结果"
                        v-model:value="addHumanFactorForm.generalWeightRanking"
                        style="width: 100%"
                        :min="1"
                        :max="30"
                    />
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script src='./index.js'></script>
<style lang="scss" scoped>
@import "./fix.css";
</style>