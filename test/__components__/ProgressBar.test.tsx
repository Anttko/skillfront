import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ProgressBar from '../../src/components/ProgressBar';
import React from 'react';
import { Sfia } from '../../src/types/types';

describe('Testing ProgressBar component', () => {
  const testSfia: Sfia[] = [
    {
      sfiaid: '118',
      levels: '1',
      level1: '2',
      level2: '3',
      level3: '4',
      level5: '5',
      level6: '6',
      level7: '',
      code: 'ADMN',
      skill: 'Business administration',
      category: 'Relationships and engagement',
      subcategory: 'Stakeholder management',
      overalldescription:
        'Managing and performing administrative services and tasks to enable individuals, teams and organisations to succeed in their objectives.',
      guidancenotes:
        'Basic administration tasks may include — but are not limited to — answering telephones, dealing with business correspondence, calling clients, customers and colleagues, greeting visitors, e-mail, filing, using digital tools to organise team meetings, making arrangements for travel and meetings, dealing with relevant suppliers.\nManagement-level business administration tasks focus on planning, managing and coordinating the activities of individuals and teams to enable them to achieve their objectives.',
      level1description:
        'Performs routine administration activities in a structured environment. \nFollows clear procedures and uses standard digital tools. \nStores and files information following agreed procedures. \nMakes simple travel and meeting arrangements.',
      level2description:
        'Assists with administrative tasks for a team. \nOrganises meetings and travel within standard guidelines.\nMaintains team filing and administration systems. \nActs as a touchpoint for internal and external contacts.',
      level3description:
        'Provides administrative support function to teams and meetings.\nTakes an active part in team meetings. \nSets up files, software systems, onboarding new starters, compiles and distributes reports. Provides guidance on administration software, procedures, processes, tools and techniques.',
      level4description:
        'Assists the team/manager in ensuring they have the information needed to support ongoing team processes. \nAssists in planning for meetings. \nSets up and provides detailed guidance on software, procedures, processes, tools and techniques for administration and workplace productivity.\nLiaises and organises across functions. Updates and maintains office policies and procedures',
      level5description:
        'Manages the delivery of business administration services. \nManages time and diary for individual senior managers and leadership teams. Filters and prioritises meeting requests. \nHandles sensitive, confidential information. \nEnsures managers have the information and resources needed to support ongoing processes and changes in processes.',
      level6description:
        'Leads and coordinates strategic initiatives working across departmental or functional boundaries. \nDesigns the timetable of executive-level meetings and forums. Sets agenda, format and desired outcomes for meetings. \nProvides direction and receives progress updates from members of an executive team. Meets collectively or individually with members of a leadership management team to follow up on action points, issues and risks. Reports on progress and resolves issues. \nManages highly sensitive and confidential issues and information.',
      level7description: '',
      keywords: [
        'administration',
        'business administration',
        'business admin',
        'admin',
        'administrative',
        'administrative support',
        'admin',
        'admin support',
        'Business administration',
        'Administrative tasks',
        'Administrative support',
        'Office management',
        'Office administration',
        'Documentation management',
        'Records management',
        'Filing',
        'Organizational skills',
        'Time management',
      ],
    },
  ];
  const max_val = 10;
  test('Can render progress bar component', () => {
    const wrapper = render(<ProgressBar item={testSfia} max_value={max_val} />);
    const p = wrapper.container.querySelector('p');
    expect(p?.textContent).toBe('Progression');
  });
});
