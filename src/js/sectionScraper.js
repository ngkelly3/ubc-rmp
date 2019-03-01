import PageType from './pageType.js'

class SectionScraper {
  constructor() {
    if (!PageType.isSectionPage()) {
      // Not in section page
      this.instrLinkElement = null
    } else {
      // No specific ID on that table so gotta refer it by row order :/
      // When user is logged in
      let instrTable = document.getElementsByClassName('table')[3]
      // TODO: Support > 1 prof
      let profColumn = instrTable.getElementsByTagName('a')

      if (profColumn.length == 0) {
        // When user is logged out
        instrTable = document.getElementsByClassName('table')[2]
        profColumn = instrTable.getElementsByTagName('a')
      }

      this.instrLinkElement = profColumn[0]
    }


    let urlParams = new URLSearchParams(window.location.href)
    this.section = urlParams.get('section')
  }

  getInstrLinkElement() {
    return this.instrLinkElement
  }
}

export default new SectionScraper()