import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { GdprInfo } from '../../src/pages/GdprInfo';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions

describe('GdprInfo', () => {
    test('Render Gdpr info page and verify some contents', async () => {
        const queryClient = new QueryClient();
        
        // Render the page
        render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <GdprInfo />
            </MemoryRouter>
        </QueryClientProvider>
        );
        // Verify that the page contains the GDPR title and most important rights
        expect(screen.getByText('GDPR')).toBeInTheDocument();
        expect(screen.getByText('The right to access and obtain a copy of your personal data')).toBeInTheDocument();
        expect(screen.getByText('The right to rectify or update your personal data')).toBeInTheDocument();
        expect(screen.getByText('The right to erase your personal data')).toBeInTheDocument();
        expect(screen.getByText('The right to restrict the processing of your personal data')).toBeInTheDocument();
        expect(screen.getByText('The right to object to the processing of your personal data')).toBeInTheDocument();
        expect(screen.getByText('The right to data portability')).toBeInTheDocument();

    });
});