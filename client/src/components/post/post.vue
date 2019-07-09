<template>
  <div class="post">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
          <!-- 展示评论内容 -->
          <PostFeed v-if="postData != null" :post="postData" :showAction="false" />

          <!-- 评论表单 -->
          <CommentForm
            v-if="postData != null"
            :postId="postData._id"
            @update="getPost(postData._id)"
          />

          <!-- 展示评论信息 -->
          <div v-if="postData != null && postData.comments.length > 0">
            <CommentFeed
              v-for="comment in postData.comments"
              :key="comment._id"
              :comment="comment"
              :postId="postData._id"
              @update="getPost(postData._id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostFeed from "./postFeed";
import CommentForm from "./commentForm";
import CommentFeed from "./commentFeed";
export default {
  name: "post",
  data() {
    return {
      postData: null,
      errors: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getPost(to.params.id);
    });
  },
  methods: {
    getPost(id) {
      this.$axios
        .get(`/api/posts/${id}`)
        .then(res => {
          this.postData = res.data;
          this.errors = {};
        })
        .catch(err => {
          this.postData = null;
          this.errors = err.response.data;
        });
    }
  },
  components: {
    PostFeed,
    CommentForm,
    CommentFeed
  }
};
</script>

<style scoped>
</style>

