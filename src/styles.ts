import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    height: 100%;
  }

  ha-card {
    height: 100%;
    padding: 16px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    font-size: 1.2em;
    font-weight: 500;
    padding-bottom: 12px;
    color: var(--primary-text-color);
  }

  .week-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    flex: 1;
    min-height: 0;
    overflow: auto;
  }

  .day-column {
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 12px;
    padding: 12px 8px;
    transition: background-color 0.2s ease;
  }

  .day-column.today {
    background: var(--primary-color);
    border-color: var(--primary-color);
  }

  .day-column.today .day-name,
  .day-column.today .day-number {
    color: var(--text-primary-color, #fff);
  }

  .day-column.today .event-item {
    background: rgba(255, 255, 255, 0.2);
    color: var(--text-primary-color, #fff);
  }

  .day-header {
    text-align: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .day-column.today .day-header {
    border-bottom-color: rgba(255, 255, 255, 0.3);
  }

  .day-name {
    display: block;
    font-size: 0.85em;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .day-number {
    display: block;
    font-size: 1.4em;
    font-weight: bold;
    color: var(--primary-text-color);
    margin-top: 2px;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .event-item {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 6px 8px;
    font-size: 0.8em;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .event-time {
    font-weight: 600;
    display: block;
    font-size: 0.9em;
    opacity: 0.8;
    margin-bottom: 2px;
  }

  .event-title {
    display: block;
    line-height: 1.3;
  }

  .no-events {
    font-size: 0.75em;
    color: var(--secondary-text-color);
    text-align: center;
    padding: 8px 0;
    font-style: italic;
  }

  .loading {
    text-align: center;
    padding: 40px 20px;
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color, #db4437);
    padding: 16px;
    text-align: center;
  }

  /* Responsive: smaller screens */
  @media (max-width: 768px) {
    .day-column {
      padding: 8px 6px;
    }

    .day-name {
      font-size: 0.75em;
    }

    .day-number {
      font-size: 1.2em;
    }

    .event-item {
      font-size: 0.75em;
      padding: 4px 6px;
    }
  }
`;
