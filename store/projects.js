export const state = () => ({
  projects: [],
  project: {
    project: {
      name: ''
    }
  },
  errors: {}
})

export const mutations = {
  setProjectList(state, projects) {
    state.projects = projects
  },
  setProject(state, project) {
    state.project = project
  },
  updateProjectName(state, name) {
    state.project.project.name = name
  },
  setErrors(state, errors) {
    state.errors = errors
  },
  clearErrors(state) {
    state.errors = {}
  }
}

export const actions = {
  async fetchProjectList({commit}) {
    try {
      const projects = await this.$axios.$get('/projects-manage/index')
      commit('setProjectList', projects)
    } catch (e) {
      commit('setErrors', e.response.data.first_errors)
      console.log(e)
    }
  },
  async fetchProject({commit}, params) {
    try {
      const project = await this.$axios.$get('/projects-manage/' + params.id)
      commit('setProject', project)
    } catch (e) {
      commit('setErrors', e.response.data.first_errors)
      console.log(e)
    }
  },
  async updateProjectName({commit}, project) {
    try {
      await this.$axios.$post('/projects-manage/update?id=' + project.project.id, project.project)
      commit('updateProjectName', project.project.name)
    } catch (e) {
      commit('setErrors', e.response.data.first_errors)
      console.log(e)
    }
  }
}

export const getters = {
  projects: state => state.projects,
  project: state => state.project,
  errors: state => state.errors
}
