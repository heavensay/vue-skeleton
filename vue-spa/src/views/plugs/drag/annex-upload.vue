<template>
        <div style="display: flex">
            <div class="drag">
                <ul class="el-upload-list el-upload-list--picture-card">
                    <draggable v-model="fileList" class="dragArea"
                               @change="change"
                               @start="start"
                               @end="end"
                               :move="move">
                        <li :tabindex="index" class="el-upload-list__item is-success animated" style=""
                            v-for="(element, index) in fileList"
                            :key="index"
                        >
                            <img :src="element.url" alt="" class="el-upload-list__item-thumbnail ">
                            <a class="el-upload-list__item-name">
                                <i class="el-icon-document"></i>
                                @{{element.name}}
                            </a>
                            <label class="el-upload-list__item-status-label">
                                <i class="el-icon-upload-success el-icon-check"></i>
                            </label>
                            <i class="el-icon-close"></i>
                            <span class="el-upload-list__item-actions"><!---->
                                <span class="el-upload-list__item-delete">
                                    <i class="el-icon-delete" @click="removeFile(index)"></i>
                                </span>
                            </span>
                        </li>
                    </draggable>
                </ul>
            </div>

            <el-upload
                    action="http://120.27.235.102:8122/fileupload/goodsManage/uploadGoodsImage.do"
                    list-type="picture-card"
                    drag
                    multiple
                    accept=".jpg,.jpeg,.png,.JPG,.JPEG"
                    :limit="5"
                    :data="uploadParam"
                    :auto-upload="true"
                    :file-list="fileList"
                    :on-success="uploadSucess"
                    :on-error="uploadError"
                    :show-file-list="false"
                    :before-upload="assertFile"
                    :on-progress="uploadProgress">
                <i slot="default" class="el-icon-plus"></i>
            </el-upload>
        </div>

</template>

<script>
    import draggable from "vuedraggable";

    export default {
        name: "annex-upload",

        data() {
            return {
                list: [1, 2, 3, 4],
                fileList: [],
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                uploadParam:{
                    imageType:"GOODS_CAROUSEL_PICTURE"
                }
            }
        },

        components: {
            draggable
        },

        methods: {
            //evt里面有两个值，一个evt.added 和evt.removed  可以分别知道移动元素的ID和删除元素的ID
            change: function (evt) {
                console.log("change===");
                console.log(evt)
                console.log(this.fileList)
            },
            //start ,end ,add,update, sort, remove 得到的都差不多
            start: function (evt) {
                console.log("start===");
                console.log(evt)
            },
            end: function (evt) {
                console.log("end===");
                console.log(evt)
                console.log(this.fileList)
                evt.item //可以知道拖动的本身
                evt.to    // 可以知道拖动的目标列表
                evt.from  // 可以知道之前的列表
                evt.oldIndex  // 可以知道拖动前的位置
                evt.newIndex  // 可以知道拖动后的位置
            },
            move: function (evt, originalEvent) {
                console.log("move===");
                console.log(evt)
                console.log(originalEvent) //鼠标位置
            },


            handleRemove(file, fileList) {
                console.log("handleRemove===");
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log("handlePreview===");
                console.log(file);
            },
            handleExceed(files, fileList) {
                console.log("handleExceed===");
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                console.log("beforeRemove===");
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            handlePictureCardPreview(file) {
                console.log("handlePictureCardPreview===");
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log("handleDownload===");
                console.log(file);
            },

            uploadSucess(response, file, fileList) {
                this.fileList = fileList
                if(response.code != 200){
                    this.$message({
                        type: 'error',
                        message: '上传失败：'+response.message
                    });
                    fileList.splice(fileList.length-1 ,1);
                }
                console.log("uploadSucess===")
                console.log(response)
                console.log(file)
                console.log(fileList)
                console.log(this.fileList)
                console.log(this.fileList.length)
            },

            uploadError(err, file, fileList) {
                console.log("uploadError===")
                console.log(err)
                console.log(fileList)
                this.$message({
                    type: 'error',
                    message: '上传失败：'+err
                });
            },

            uploadProgress(event, file, fileList) {
                console.log("uploadProgress===")
                if (file.percentage == 100) {

                } else {
                    file.progressFlag = true
                    file.progressPercent = Math.abs(file.percentage.toFixed(0));
                }
            },

            removeFile(index) {
                var that = this;
                this.$confirm('确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    that.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    // that.images[index].to_del = true;
                    // setTimeout(function () {
                    that.fileList.splice(index, 1);
                    // }, 1000);
                })
            },

            assertFile(file){
                var imgSize = file.size/1024/1024;
                if(imgSize > 0.5){
                    alert('请上传小于0.5M的图片')
                    return false;
                }
            }
        }
    }
</script>

<style>
    .el-upload-dragger{
        width: 80px;
        height: 80px;
    }

    .el-upload--picture-card{
        width: 80px;
        height: 80px;
        line-height: 80px;
    }
</style>