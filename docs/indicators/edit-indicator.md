---
sidebar_position: 3
custom_edit_url: null
---

# Editing an Indicator

When editing an existing Indicator in the M & E Monitor, it is essential to update the relevant fields accurately to reflect the most current information. The following details can be modified:

## Editing Details of Indicators
### Indicator Details

- **Indicator Description**: Update the title of the indicator as necessary to ensure it accurately reflects its purpose.
- **Definition**: Revise the explanation of how the indicator is calculated if there are any changes in methodology.
- **Progress Direction**: Modify the progress direction based on the updated values:
  - Choose **"Increasing"** if the baseline is less than the target.
  - Choose **"Decreasing"** if the baseline is greater than the target.

### Baseline and Target Updates

- **Baseline**: Enter the updated baseline value. This value serves as a reference point for measuring progress.
- **Target**: Set the updated target value, indicating the desired outcome for the indicator.

### Automatic Current State and Progress Recalculation

Please note that when either the **baseline** or **target** values are updated, the following will occur automatically:

- **Current State**: The current state value will be recalculated based on the new baseline and target.
- **Percentage Progress**: The percentage progress will also be automatically recalculated to reflect the changes made.
- **Progress Direction**: The progress direction will be updated based on the comparison between the new baseline and target values.

This automatic recalculation feature ensures that all metrics remain accurate and reflective of the most current data, enabling effective monitoring and evaluation of your project's progress.

### Additional Information

- **Data Source**: Update the source of data collection if there have been any changes.
- **Frequency**: Adjust how often the data will be collected if necessary.
- **Responsible**: Revise the person responsible for measuring the indicator, if applicable.
- **Reporting**: Modify the reporting details to indicate where the updated results will be communicated.

By carefully reviewing and updating the relevant fields during the editing process, you ensure that the Indicator remains aligned with the project’s objectives and accurately tracks its progress.

## Editing the Status of an Indicator

Editing the status of an indicator in the M&E Monitor not only changes the status of the indicator itself but also updates all associated responses to ensure consistency across the system. This approach helps maintain data integrity and aligns the indicator's status with the responses linked to it.

### How Editing the Status Works

When a user edits the status of an indicator, the following actions occur:

1. **Indicator Status Update**  
   - The status of the selected indicator is changed to the new status value.
   - Status options include **Draft**, **Review**, **Public**, and **Archived**.

2. **Responses Status Synchronization**  
   - All responses attached to the indicator will automatically have their status updated to match the new status of the indicator.
   - This ensures that responses are aligned with the indicator's current state.

### Example Scenario

- **Before the Update**:
   - An indicator is set to **Review**, and all associated responses are marked with the **Review** status.
- **Status Change**:
   - The indicator's status is updated to **Public**.
- **After the Update**:
   - All responses linked to this indicator will also be updated to **Public** to match the new status of the indicator.

### Why This Matters

Updating the status of both the indicator and its responses is crucial for the following reasons:

- **Consistency**: Ensures all data related to the indicator reflects the same status, avoiding discrepancies.
- **Data Integrity**: Maintains accurate tracking of the indicator's progress and associated responses, providing a true reflection of its current state.
- **Streamlined Management**: Allows for efficient management of indicators and their related responses, ensuring they are treated as a cohesive unit.

### Steps to Edit the Indicator Status

1. Navigate to the **Indicator Listing** page.
2. Click in the **The Indicator Name** link to go to the indicator's details page.
3. Change the **Status** field to the desired value (Draft, Review, Public, or Archived).
4. Save the changes by clicking <a href="" class="primary-button">Update Indicator</a> button.

![Update Indicator Status](./img/update-status.png)

Once the status is saved, the system will automatically update all responses associated with the indicator to match the new status.

### Important Notes

- **Impact on Archived Indicators**: When an indicator's status is set to **Archived**, all its responses will also be considered archived. This helps move inactive or completed indicators and their data out of active monitoring.
- **Reverting Status Changes**: If an indicator's status is reverted, its responses will be updated accordingly to match the new status.

## Conclusion

Editing the status of an indicator is a straightforward process that automatically synchronizes the status of all associated responses, ensuring consistency and accuracy throughout the M&E Monitor.
