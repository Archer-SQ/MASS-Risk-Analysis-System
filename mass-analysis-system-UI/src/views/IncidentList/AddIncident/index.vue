<template>
    <div>
        <a-modal
            :visible="props.show"
            title="添加船舶事故数据"
            @cancel="handleClose"
            @ok="submit"
        >
            <a-form
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 18 }"
                ref="formRef"
                :rules="rules"
                :model="addIncidentForm"
            >
                <a-form-item label="事故名称" name="name">
                    <a-input
                        placeholder="请输入事故名称"
                        v-model:value="addIncidentForm.name"
                    />
                </a-form-item>
                <a-form-item label="发生日期" name="time">
                    <a-date-picker
                        placeholder="请选择日期"
                        v-model:value="addIncidentForm.time"
                    />
                </a-form-item>
                <a-form-item label="航行阶段" name="place">
                    <a-tree-select
                        v-model:value="addIncidentForm.place"
                        style="width: 100%"
                        :tree-data="treeDataPlace"
                        allow-clear
                        placeholder="请选择失事时所在航行阶段"
                    />
                </a-form-item>
                <a-form-item label="人为因素" name="factors">
                    <a-tree-select
                        v-model:value="addIncidentForm.factors"
                        style="width: 100%"
                        :tree-data="treeDataFactors"
                        tree-checkable
                        allow-clear
                        placeholder="请选择与事故有关的人为因素"
                    />
                </a-form-item>
                <a-form-item label="事故报告" name="filePathName">
                    <a-upload
                        :multiple="false"
                        action="http://localhost:3000/incident/upload"
                        @change="handleChange"
                        v-model:file-list="fileList"
                        accept=".doc,.docx,.pdf"
                    >
                        <a-button :disabled="fileList.length === 0 ? false : true">
                            <upload-outlined></upload-outlined>
                            点击上传事故报告
                        </a-button>
                    </a-upload>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script src='./index.js'></script>
<style lang="scss" scoped>
@import "./fix.css";
</style>