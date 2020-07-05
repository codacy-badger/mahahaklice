# mahahaklice
RTWA - Real-Time Web Application

### Content

1. Using own implementation in:
    1. backend-fastify (backend, works with both frontends)
    1. frontend-react (react frontend)
    1. frontend-sapper (sapper frontend)
1. Using Meteor with React in
    1. meteor-react (based on [tutorial](https://www.meteor.com/tutorials/react/creating-an-app))
1. Using Meteor with Svelte in
    1. meteor-svelte (based on [tutorial](https://www.meteor.com/tutorials/svelte/creating-an-app))

### RTWA POC

1. Facebook or Google login (or both…)<br/><i>With JWT tokens</i><br/>&nbsp;
1. Collection mahahaklice<br/><i>Use [casual](https://www.npmjs.com/package/casual) to generate random data</i><br/>&nbsp;
    1. id		ObjectID	(not editable)
    1. itemId		string		(not editable, create with [uuidv4](https://github.com/uuidjs/uuid), ties iterations together)
    1. iteration	int		(not editable, autoincrement)
    1. isLatest	boolean	(only latest iteration has true)
    1. isDraft		boolean	(only one per itemId, no iteration until submited)<br/>&nbsp;
    1. rating		int		(numberfield)
    1. name		string		(textfield)
    1. description	multiline	(textarea)
    1. date		date		(date picker)
    1. species	enum 		(checkbox)
        1. Humans
        1. Draenei
        1. Dryads
        1. Dwarves
        1. Gnomes
        1. Worgen
1. Create 100 instances<br/><i>Reset data every hour for any deployed demo</i><br/>&nbsp;
1. Create a listing page, to show a page of mahahaklice data
    1. Grid and preview sections
    1. In grid, only show isLatest=true rows, since this is the active iteration
    1. Create filters for all fields	(multi filter with AND)
    1. Allow sorting on all fields	(multi-sort optional)
    1. Allow page navigation		(10 items per page)
    1. Selected row actions:
        1. View		(default when selected - shows item in preview)
        1. Edit		(opens editor page, creates draft - fully collaborative)
        1. History		(shows a grid with all iterations in preview, sorted by iteration desc)
        1. Delete
    1. Allow user to chose:
        1. Update rows in real-time
        1. Update rows in user defined interval (in minutes)
        1. Notify user that data has changed, but they manually update<br/>&nbsp;
1. Create the editor page for an item, fully collaborative
    1. On Edit in listing, if draft exists for that item, handle it
        1. If draft is currently being edited, send the user there
        1. Otherwise allow the user to throw that draft away and start a new one
    1. Save button saves the draft
    1. Save and close saves the draft and goes back to listing
    1. Submit saves the draft as a new iteration with isDraft=false
