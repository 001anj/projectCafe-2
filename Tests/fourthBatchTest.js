import testCafeFactory, { Selector } from 'testcafe';
import { ClientFunction, t } from 'testcafe';


fixture('UI test case 4 for current open job positions')
.page('https://company.trivago.com/open-positions/'); //opening the webpage

test('Should check for heading, button, values for fourth batch of current open job positions', async t => {

// Finding the count of total opened jobs
    var tableElements = Selector('tr');
    var number    = await tableElements.count;
    for (var i = 61; i < number; i++)
    {    
    await t.click(tableElements.nth(i)) // Clicking job profile one by one 
   
// Check whether heading is present in each job profile
    await t.setPageLoadTimeout(1) 
    const h1Text = Selector('h1')
    await t.expect(h1Text.visible).eql(true)

// Check whether job family is present in each job profile
    const jobFamily = Selector('span[id="job_family"]').innerText;
    await t.expect(jobFamily.visible).notEql('')

// Check whether required experience is present in each job profile
    const experience = Selector('section.content div div:nth-child(2) p:nth-child(2) span').innerText;
    await t.expect(experience.visible).notEql('')

// Check whether location of job is present in each job profile
    const location = Selector('section.content div div:nth-child(3) p:nth-child(3) span').innerText;
    await t.expect(location.visible).notEql('')

// Check whether required language is present in each job profile
    const language = Selector('section.content div div:nth-child(4) p:nth-child(4) span').innerText;
    await t.expect(language.visible).notEql('')

// Check whether apply button is present on each job profile  
    const applyButton =  (Selector('.btn'))
    await t.expect(applyButton.visible).eql(true)

// Navigate back to parent url after executing test in each job profile
    await t.navigateTo('https://company.trivago.com/open-positions/')
    await t.setPageLoadTimeout(1)
    if(i > number) {
        break;
    }
    } 
}); 
