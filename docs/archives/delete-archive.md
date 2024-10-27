---
sidebar_position: 4
custom_edit_url: null
---

# Deleting an Archive

The **Delete Archive** functionality in the M&E Monitor allows users with sufficient permissions to remove an archive from the system. Deletion is handled as a **soft delete**, meaning the archive can be restored if needed. Only organization administrators can restore soft-deleted archives, while permanent deletion is restricted to system administrators.

## Steps to Delete an Archive

To delete an existing archive, follow these steps:

1. **Navigate to the Archives Listing Page**  
   - From the main menu, go to the **Archives** section to view the list of available archives.

2. **Initiate the Delete Action**  
   - Locate the archive you wish to delete.  
   - Click the **Trash** icon associated with the archive. This action will trigger a **confirmation prompt** asking you to confirm the deletion.

3. **Confirm Deletion**  
   - In the confirmation dialog, carefully review the action.  
   - Click **Delete** to proceed, or **Cancel** to abort the operation.

## What Happens After Deletion?

- **Soft Delete:**  
  - The archive will be marked as deleted but is not removed from the database. This allows for future restoration.
  - **Only organization administrators** can restore soft-deleted archives, ensuring that accidental deletions can be recovered.

- **Permanent Deletion:**  
  - If a permanent deletion is required, a **system administrator** must perform the action.
  - **Permanent deletion** will remove all associated data, including **indicators, responses, and attached files**. This action is irreversible.

## Important Considerations

- **User Permissions:**  
  - Only users with **sufficient permissions** can initiate the delete action. Organization administrators can **restore** soft-deleted archives, while full administrators can **permanently delete** archives.
  
- **Data Impact:**  
  - Permanently deleting an archive will remove all related data, including **indicators**, **responses**, and **files** attached to the archive.

- **Confirmation Requirement:**  
  - Before deletion, users are prompted to **confirm their actions** to prevent accidental data loss.

## Summary

The **Delete Archive** process ensures flexibility and safety when managing archives in the M&E Monitor. With **soft delete capabilities**, users can restore archives if needed, while administrators retain the ability to **permanently delete** archives when necessary.