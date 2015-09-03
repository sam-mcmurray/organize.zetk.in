import React from 'react/addons';

import CampaignSectionPaneBase from './CampaignSectionPaneBase';

import CampaignSelect from '../../misc/CampaignSelect';


export default class CampaignOverviewPane extends CampaignSectionPaneBase {
    getPaneTitle() {
        return 'Campaign overview';
    }

    renderPaneContent() {
        return [
            <CampaignSelect/>
        ];
    }
}
