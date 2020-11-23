export const state = () => ({
  projects: [],
  project: {
    project: {
      name: ''
    }
  },
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
  }
}

export const actions = {
  async fetchProjectList({commit}) {
    try {
      const projects = await this.$axios.$get('https://api.quwi.com/v2/projects-manage/index')
      commit('setProjectList', projects)
    } catch (e) {
      throw e
    }
  },
  async fetchProject({commit}, params) {
    try {
      const project = await this.$axios.$get('https://api.quwi.com/v2/projects-manage/' + params.id)
      commit('setProject', project)
    } catch (e) {
      throw e
    }
  },
  async updateProjectName({commit}, project) {
    try {
      await this.$axios.$post('https://api.quwi.com/v2/projects-manage/update?id=' + project.project.id, project.project)
    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  projects: state => state.projects,
  project: state => state.project
}
