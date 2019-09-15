import testCafeFactory, { Selector } from 'testcafe';
import { ClientFunction, t } from 'testcafe';


fixture('UI test case 5 for a current open job position')
.page('https://company.trivago.com/open-positions/'); //opening the webpage

test('check for b tag for specific text in this job profile', async t => {

    const job = Selector('.job-description-wd').withText('Data Analyst - Express Booking');
    await t.click(job);

    // check for b tag for specific lines in this job profile
    const boldText1 = Selector('b').withText('What you’ll do:')
    await t.expect(boldText1.visible).eql(true)

    const boldText2 = Selector('b').withText('What you’ll')
    await t.expect(boldText2.visible).eql(true)

    const boldText3 = Selector('b').withText('definitely need')
    await t.expect(boldText3.visible).eql(true)

    const boldText4 = Selector('b').withText('What we’d love you to have:')
    await t.expect(boldText4.visible).eql(true)
 
});