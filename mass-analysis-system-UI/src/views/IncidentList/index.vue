<template>
    <div>
        <a-card title="事故列表" :headStyle="headStyle" class="eventList">
            <template #extra
                ><a-input-search
                    class="eventSearch"
                    placeholder="事 故 搜 索"
                    v-model:value="keyword"
                    @input="handleInput"
                /><a-button
                    class="addEvent"
                    type="primary"
                    @click="showAddIncidentDialog = true"
                    @mouseleave="handleMouseLeave(showAddIncidentDialog)"
                    >新增</a-button
                ></template
            >
            <a-divider style="margin: 0"></a-divider>
            <a-table
                :columns="columns"
                :data-source="eventList"
                :scroll="{ y: 300 }"
                :pagination="pagination"
            >
                <template #serialNumber="data">
                    <a-badge
                        :count="data.record.serialNumber"
                        :overflowCount="9999"
                        :number-style="{
                            backgroundColor: '#fff',
                            color: '#999',
                            boxShadow: '0 0 0 1px #d9d9d9 inset',
                        }"
                    />
                </template>
                <template #time="data">
                    {{ formateTimestamp(data.record.time) }}
                </template>
                <template #factors="{ record }">
                    <span>
                        <a-tag
                            v-for="factor in record.factors"
                            :key="factor"
                            color="volcano"
                        >
                            {{ factor }}
                        </a-tag>
                    </span>
                </template>
                <template #filePathName="{ record }">
                    <a-button
                        type="primary"
                        :danger="
                            adjustPath(record.filePathName).fileSuffix === 'pdf'
                                ? true
                                : false
                        "
                        shape="round"
                        size="small"
                        :href="adjustPath(record.filePathName).path"
                        :download="record.name"
                        target="_blank"
                    >
                        <file-pdf-outlined
                            v-if="
                                adjustPath(record.filePathName).fileSuffix ===
                                'pdf'
                            "
                        />
                        <file-word-outlined v-else />
                        预览
                    </a-button>
                </template>
            </a-table>
        </a-card>
        <add-incident
            v-model:show="showAddIncidentDialog"
            :parentGetList="getList"
        />
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss">
@import "./index.scss";
@import "./fix.css";
</style>