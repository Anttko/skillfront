import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SkillSelection } from '../../src/pages/SkillSelection';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions

describe('SkillSelection', () => {
    test('Search for "python" and see if "programming" comes up', async () => {
        const queryClient = new QueryClient();
        
        // Render the page
        render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <SkillSelection />
            </MemoryRouter>
        </QueryClientProvider>
        );

        // Wait for the page to load
        await waitFor(() => {
        expect(screen.getByPlaceholderText('Search for a skill')).toBeInTheDocument();
        });

        // Get the search bar
        const searchBar = screen.getByPlaceholderText('Search for a skill');

        // Type in the search bar to filter skills
        fireEvent.change(searchBar, { target: { value: 'python' } });
        // Press enter to submit the search
        fireEvent.keyDown(searchBar, { key: 'Enter', code: 'Enter' });
        // Wait for the search to complete
        await waitFor(() => {
            // Check if the skill "Programming" is in the list
            expect(screen.getByText('Programming/software development')).toBeInTheDocument();
        });
    });
});