import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Jonathan Law', 'John Doe', 'Hacker Man'];
  }
}
