const Page = require('./page');

class UsersPage extends Page {
  get loadingTittle() {
    return $('#users-loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get usersItems() {
    return this.usersList.react$$('User');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTittle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error('Error! Users were not loaded')
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.usersItems.length

      if (!usersCount) {
        throw new Error('There are any users')
      }

      await this.usersItems[0].$('#user-delete').click()

      const usersCountAfterDelete = await this.usersItems.length

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error('Error! User was not deleted, or deleted more then 1')
      }

    } catch (e) {
      throw new Error('Error! User was not deleted! ' + e.message)
    }
  }

  open() {
    return super.open('/users-test');
  }
}

module.exports = new UsersPage();
