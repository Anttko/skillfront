import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Skill from '../../src/components/Skill';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
describe('Testing Skill component', () => {
  const textData = {
    sfiaid: '57',
    levels: '',
    level1: '',
    level2: '3',
    level3: '4',
    level5: '5',
    level6: '6',
    level7: '',
    code: 'ADEV',
    skill: 'Animation development',
    category: 'Development and implementation',
    subcategory: 'Systems development',
    overalldescription: 'Designing and developing animated and interactive systems such as games and simulations.',
    guidancenotes:
      'Animation development includes using specialised tools and techniques such as — but not limited to — wireframes, interaction diagrams and boned rigs.',
    level1description: '',
    level2description: '',
    level3description:
      'Builds visual and audio components. \nUses design tools to evolve rapid prototypes of web pages. \nUses visual design tools and organic modelling techniques to create and animate virtual characters within a game or system design.',
    level4description:
      'Builds visual and audio components and integrates them into the system structure, typically using a games engine.\nUses design tools  to evolve rapid prototypes of web pages, and assess the viability of design concepts. \nUses complex visual design tools and organic modelling techniques to create and animate virtual characters within a game or system design.',
    level5description:
      'Manages iterations of level design and storytelling, documenting the overall flow and architecture of a game or similar system. \nDevelops conceptual structures into design blueprints to create high-level structures and runtime architectures for websites.',
    level6description:
      'Provides overall creative direction in the conception and design of animation products such as games and simulations.',
    level7description: '',
    keywords: [
      'Animation, Games, Simulation, Visual design, Audio design, Interaction design, Storytelling, Virtual characters',
    ],
  };

  test('Can render skill component', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/skills/57']}>
        <Skill {...textData} />
      </MemoryRouter>,
    );
    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toBe('Animation development');
  });
});
