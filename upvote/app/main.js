const submissions = [
    {
      id: 1,
      title: 'Lebron James',
      description: 'All round player ready to destroy you.',
      url: '#',
      votes: 16,
      avatar: '../public/images/avatars/daniel.jpg',
      submissionImage: '../public/images/submissions/bron.png',
    },
    {
      id: 2,
      title: 'Michael Jordan',
      description: 'Possibly the greatest player to ever touch a basketball.',
      url: '#',
      votes: 11,
      avatar: '../public/images/avatars/kristy.png',
      submissionImage: '../public/images/submissions/mj.png',
    },
    {
      id: 3,
      title: 'Kobe Bryant',
      description: 'The black Mamba. Need I say more?',
      url: '#',
      votes: 17,
      avatar: '../public/images/avatars/veronika.jpg',
      submissionImage: '../public/images/submissions/kobe.png',
    },
  ];

const submissionComponent = {
  template: `<div style="display: flex; width: 100%">
    <figure class="media-left">
      <img :src="submission.submissionImage" class="image is-64x64">
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
            <a :href="submission.url" class="has-text-info">{{ submission.title }}</a>
            <span class="tag is-small">#{{submission.id}}</span>
          </strong>
          <br>
          {{submission.description}}
          <br>
          <small class="is-size-7">
            Submitted by:
            <img :src="submission.avatar" alt="" class="image is-24x24">
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small" v-if="" @click="upvote(submission.id)">
        <i class="fa fa-chevron-up">
          <strong class="has-text-info">{{submission.votes}}</strong>
        </i>
      </span>
    </div>
  </div>`,
  props : ['submission', 'submissions'],
  methods: {
    upvote(submissionId) {
      const sub = this.submissions.find(submission => submission.id === submissionId);
      sub.votes++;
    }
  }
}

new Vue({
  el: "#app",
  data: {
    submissions:submissions
  },
  components: {
    'submission-component':submissionComponent
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((lowest, highest) => highest.votes - lowest.votes);
    }
  },
});
