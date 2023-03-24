---
sidebar_position: 6
---

# Creating a New Form Model

## 1. Get started creating form models

Creating a Form Model can be done by clicking the add button as shown below.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-1.png)

Once you click the button, the Form Model will automatically be created and saved. Then you'll be automatically redirected to the Form Model Create/Edit Page (https://dev.worx.id/forms/edit/:id).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-2.png)

On the Create/Edit Form Model Page, you will see many sections and elements that will be explained later because the explanation is quite long. Additional information, on the Create/Edit Model Form page there is no save button because the system will automatically save a change when something is updated in the section or element. By default, when you create a Form Model, the Form Model name is "New Form" and the Form Model description is "Description".

## 2. Section Explanation

### 1. Toolbox (Drag & Drop)

The Toolbox section is a section for a list of input elements used to build a Form Model. Currently, there have been 15 input elements, namely Text Field, Checkbox, Radio Group, Yes/No (Boolean), Dropdown, Date, Time, Separator, Rating, Integer, File, Photo, Signature, Sketch, dan Barcode.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-3.png#center)

The element inputs will be described in a separate section later.

### 2. Form Fields

The Form Fields section is a section that lists the input elements that will be displayed in the Form Model. The Form Fields section can be filled in by dragging one of the elements from the Toolbox Section and dropping the element into the Form Fields Section. You can see an example of how to drag & drop an input element like in the video below.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-4.gif)

In the video above, you can see how the process of dragging & dropping as well as how the autosave system works. In Form Fields, the position of the input elements can be changed by dragging & dropping an input element. For example, like the video above.

### 3. Properties

The properties section is a section that contains inputs that are used to organize each input element. Each input element has specific settings and also has the same settings. The settings on the input elements will be adjusted in a separate section. For example, the "Header Info" element has the properties fields "Form Name" and "Description".

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-5.png)

Note: The Field Properties of each element can be seen by clicking one of the input elements in the Form Fields Section. Automatically, the Properties section will change as the input element is selected.

There are two buttons in the Field Properties, namely the delete button and the duplication button. The delete button (with a trash can icon) functions to delete the element you are currently selecting. The duplication button located to the right of the delete button functions to duplicate the element you are selecting.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-6.png#center)

### 4. Preview

The Preview section is a section for displaying a preview of the Form Fill page for the application version of the Form Model that you created. For example, as shown below.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-7.png)

The input elements that appear in the Preview Section are from the Form Fields Section. When you drag & drop an element from the Toolbox Section into the Form Fields Section, it will automatically appear in the Preview Section.

## 3. Explanation of the Elements

### 1. Header Info

The Header Info is used to set the title and caption of the Form Model you created. This Header Info will appear on the Form Fill Page of the Worx website and Worx mobile app.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-8.png)

The Header Info has 2 properties fields, namely the form name and description. The following is the explanation of the field properties of the Info Header.

#### 1. Form Name

The Form Name works to set the title of the Form Model you created and this field is required.

#### 2. Description

The Description is to set the description of the Form Model you created and this field is required.
You can see a preview of the Header Info in the Preview Section. The result is shown below. The name and description of the form will be attached as a title as well as a description.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-9.png#center)

### 2. Text Field

The Text Field functions to enter data such as letters, numbers, and symbols. In Text Field, you are free to enter any character. The Text Field is used to collect data such as email, full name, address, etc. The maximum number of characters that can be entered into the Text Field is 1024 characters.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-10.png)

Text Field has 4 field properties, namely Label, Description, Allow multiple lines, and Required. The following is the explanation of the field properties of Text Field.

#### 1. Label

The Label functions to set the title of the Text Input. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption of the Text Field. This caption is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Allows Multiple Lines

The Allowing Multiple Lines property functions set whether the public can enter data not only in one line but also in more than one line by clicking enter on the Text Field.

#### 4. Required

The Required property serves to set if this Text Field is required on the Form Fill page. The checking process will occur on the server and there will be a notification that Text Field is required.

You can see a Preview of the Text Field in the Preview Section. The result is shown below. There are a label, a description, and a Text Field view.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-11.png#center)

### 3. Checkbox

The Checkbox input functions to provide more than one answer choice option where you can select more than one answer option. The Checkbox is used to create answer options that are already provided and you can select more than 1 answer.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-12.png)

The Checkbox has 6 property fields, namely Label, Description, Option List, Minimum Check Option, Max Check Option, and Mandatory. The following is the explanation of the field properties of the Checkbox.

#### 1. Label

The Label functions to set the title of the Checkbox. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption of the Checkbox. This caption is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Option & Add Options

In the Options List, there are Add Options and Option Text Fields. The Add Option button serves to add answer options. When you click the Add Option Button, a Text Input will appear where you can add answer text. In addition to that, there is also an X icon button that functions to remove the option.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-13.png)

#### 4. Min. Checked Options

The minimum Check Options functions to set what is the minimum number of options to be checked.

#### 5. Max. Checked Positions

The maximum Check Options functions to set what is the maximum number of options that can be checked.

#### 6. Required

The required property functions to set if the Checkbox is required on the Fill Form Page. The checking process will occur on the server and there will be a notification that the Checkbox is required.

You can see a Preview from the Checkbox in the Preview Section. The result is shown below. There are a label, a description, and a list of options.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-14.png#center)

### 4. Radio Group

The Radio Group input functions to provide more than one answer choice option, but you can only choose one answer option. The Radio Group is used to create answer options that are already provided but can only choose one answer option.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-15.png)

The Radio Group has 4 field properties, namely Label, Description, Option List, and Required. Here's the explanation of the field properties of the Radio Group.

#### 1. Label

The Label functions to set the title of the Radio Group. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The description functions to organize the description of the Radio Group. This description is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Option & Add Options

In the Option List, there are Add Options and Option Text Fields. The Add Option button functions to add the answer options. When you click the Add Option Button, a Text Field will appear where you can add the answer text. Besides that, there is also an X icon button that functions to remove the option.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-16.png#center)

#### 4. Required

The Required property functions to set that this Radio Group is required on the Form Fill page. The inspection process will take place on the server and there will be a notification that the Radio Group is required.

You can see a preview of the Radio Group in the Preview Section. The result is shown below. There are a label, a description and a list of options.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-17.png#center)

### 5. Yes/No

The Yes or No input serves to provide a yes or no answer option. The input form is almost the same as the Radio Group, but the answer option is already directly provided by the system. You can only choose one answer, which is yes or no.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-18.png)

Yes or No only has 1 property field, it is Label. The following is the explanation of the field properties of Yes or No.

#### 1. Label

The Label functions to set the title of input. This label is not required or may be left blank. This label will appear on the Form Fill Page on the Worx website and the Worx mobile application.

You can see a Preview of Yes or No in the Preview Section. The result is shown below. There are labels as well as a selection of Yes and No options.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-19.png#center)

### 6. Dropdown

The Dropdown input functions to bring up a list of options for the user to select one of the existing options. The Dropdown is used to collect data such as country and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-20.png)

The dropdown has 4 property fields, namely Label, Description, Option List, and Required. The following is the explanation of the field properties of the Dropdown.

#### 1. Label

The Label functions to set the title of the Dropdown. This label is not required or may be left blank. This label appears on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption from the Dropdown. This caption is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Option & Add Options

In the Option List, there are Add Options and Option Text Fields. The Add Option button functions to add answer options. When you click the Add Option Button, a Text Field will appear which you can add the answer text. Besides that, there is also an X icon button that functions for Removed the option.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-21.png#center)

#### 4. Required

The Required property functions to set if this Dropdown is required on the Form Fill Page. The checking process will occur on the server and there will be a notification that a Dropdown is required.

You can see a preview of the Dropdown in the Preview Section. The result is shown below. There are a label, a description, and a list of options.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-22.png#center)

### 7. Date

The Date input functions to enter a date by selecting from the calendar without having to enter manually in the text field. The Date input is used to collect data such as date of birth and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-23.png)

The Date input has 5 field properties, namely Label, Description, Disable Future Date Selection, Disable Past Date Selection, and Required. The following is the explanation of the field properties of Text Field.

#### 1. Label

The Label functions to set the title of the Date. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption from the Date. This caption is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Disable date selection in the future

This property is used to limit you from being able to select the date above today. For example, today is January 11th, so you can not choose a date above January 11th.

#### 4. Disable date selection in the past

This property is used to limit you from being able to select the date below today. For example, today is January 11th, so you can not choose a date below January 11th.

#### 5. Required

The Required property functions to set if this Date is required on the Form Fill page. The checking process will occur on the server and there will be a notification that the Date is required.

You can see a preview of the Date in the Preview Section. The result is shown below. There are a label, a description, a text field, and a date select button (with a calendar icon).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-24.png#center)

### 8. Time

The Time functions to enter the time by selecting from the clock without having to enter manually in the text field. The Time input is used to collect data such as entry hours, exit hours, and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-25.png)

The Time has only 1 property field, which is the Label. The following is an explanation of the field properties of the Time.

#### 1. Label

The Label functions to set the title of Time. This label is not required or can be left blank. This label will appear on the Form Fill Page on the Worx website and the Worx mobile app.

You can see a preview of the Time in the Preview Section. The result is shown below. There is a label on the select clock button (with the clock icon).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-26.png#center)

### 9. Separator

The Separator functions to provide borders in the form of lines, titles, and descriptions. The Separator is used to group input elements, such as input elements specifically for personal data and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-27.png)

The separator has 2 field properties, namely Label and Description. The following is the explanation of the field properties of the Separator.

#### 1. Label

The Label functions to set the title of the Separator. This label is not required or can be left blank. This label will appear on the Form Fill Page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption of the Separator. This description is not required or may be left blank. This will appear on the Form Fill Page on the Worx website and the Worx mobile app.

You can see a preview of the Separator in the Preview Section. The result is shown below. There are a label, a description, and a boundary line.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-28.png#center)

### 10. Ratings

The Ratings input functions to give a stellar assessment of something. The Ratings input is used to collect data such as customer satisfaction and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-29.png)

The rating has 4 field properties, namely Label, Description, Star Count, and Required. The following is an explanation of the field properties of Rating.

#### 1. Label

The Label functions to set the title of the Rating. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption of the Rating. This description is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Stars Count

The Stars Count functions to set the maximum number of star ratings that can be inputted, but the Stars Count is limited to 10.

#### 4. Required

The Required property functions to set if this rating is required on the Form Fill page. The checking process will occur on the server and there will be a notification that the Ratings input is required.

You can see a preview of the Ratings in the Preview Section. The result is shown below. There are a label, a description, and a rank input.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-30.png#center)

### 11. Integer

The Integer input functions to enter data in the form of numbers only. The Integer input is almost the same as Text Field, but Integer can only input numbers. The Integer input is used to collect data such as age, weight, and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-31.png)

The Integer input has only 1 property field, which is Label. The following is the explanation of the field properties of Integer input.

#### 1. Label

The Label functions to set the title of the Integer. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

You can see a preview of Integer in the Preview Section. The results are shown below. There is a label as well as an input.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-32.png#center)

### 12. File

The File input serves to upload files to the form. Currently, the formats that can be uploaded are CSV, DOC, PDF, and XLS. The File input is used to collect file data such as weekly reports and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-33.png)

The file has 9 field properties, namely Label, Description, Maximum File, File Format, Minimum File Size, Minimum File Size Format, Maximum File Size, Maximum File Size Format, and Required. The following is the explanation of the field properties of the File.

#### 1. Label

The Label functions to set the title of the File. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the description of the File. This description is not required or can be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Max. Number of Files

The Max Files property functions to set a limit on the number of files that can be uploaded to the report.

#### 4. Format File

The File Format functions to set what formats can be uploaded to the report. Currently, there are 4 types of formats, namely CSV, DOC, PDF, and XLS. Any type of format option means it can evoke CSV, DOC, PDF, and XLS formats.

#### 5. Min. File Size

The minimum file size property functions to set what is the minimum file size that can be uploaded.

#### 6. Min. File Size Format

The minimum file size format property functions to set the format of the minimum file size. There are 3 formats, namely bytes, KB, and MB.

#### 7. Max. File Size

The maximum file size property functions to set the maximum file size that can be uploaded.

#### 8. Max. File Size Format

The max file size format property functions to set the format of the maximum file size. There are 3 formats, namely Bytes, KB, and MB.

#### 9. Required

The Required property functions to set if this File input is required on the Form Fill Page. The checking process will occur on the server and there will be a notification that the File input is required.

You can see a preview of the File input in the Preview Section. The result is shown below. There are a label and an Add File Button.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-34.png#center)

### 13. Photo

The Photo input functions to upload photos through the gallery or take photos directly through the camera which will then be sent to the form. The Photos input are used to collect data such as photo ID cards and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-35.png)

Photos have 5 properties fields, namely Label, Caption, and Required. The following is the explanation of the field properties from the Photo input.

#### 1. The Label

The Label functions to set the title of the Photo. This label is not required or may be left blank. This label will appear on the Form Fill Page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption of the Photo. This description is not required or can be left blank. This information will appear on the Form Fill page on the Worx website and the Worx mobile application.

#### 3. Max. Number of Images

The Maximum Image property functions to set what is the maximum number of photos/images that can be uploaded to the Form.

#### 4. Allow Upload From Galery

The Allow To Upload From Gallery property functions to allow uploading photos/images through the gallery.

#### 5. Required

The Required property functions to set if this photo is required on the Form Fill Page. The inspection process will occur on the server and there will be a notification that the photo is required.

You can see a preview of the Photo in the Preview Section. The result is like this image. There are a label, a caption, a camera button, and a gallery button.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-36.png#center)

### 14. Signature

The Signature input functions to insert a signature into the Form. The Signature input is used to collect data such as attendance signatures and so on.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-37.png)

The Signature has 3 properties fields, namely Label, Description, and Required. The following is the explanation of the field properties of Signature.

#### 1. Label

The Label functions to set the title of the Signature. This label is not required or may be left blank. This label will appear on the Form Fill page on the Worx website and the Worx mobile app.

#### 2. Description

The Description functions to set the caption of the Signature. This description is not required or may be left blank. This information will appear on the Form Fill Page on the Worx website and the Worx mobile application.

#### 3. Required

The Required property functions to set if this Signature input is required on the Form Fill Page. The checking process will occur on the server and there will be a notification that the Signature is required.

You can see a preview of the Signature input in the Preview Section. The result is shown below. There are a label, a description, and an Add Signature Button.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-38.png#center)

### 15. Sketch

The Sketch input functions to draw on the canvas. Besides that, you can also add a photo/image as a background. The Sketch input is used to help provide clearer image/photo information.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-39.png)

Sketch has only 1 property field, namely Label. The following is the explanation of the field properties from Sketch.

#### 1. Label

The Label functions to set the title of the Sketch input. This label is not required or may be left blank. This label will appear on the Form Fill Page on the Worx website and the Worx mobile app.

You can see a preview of the Sketch input in the Preview Section. The result is shown below. There are a label as well as a Sketch Button (with a brush icon).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-40.png#center)

### 16. Barcode

The Barcode input is used to scan 1D barcodes or 2D barcodes. There are 2 ways to scan a barcode, namely through uploading via a gallery or scanning through a camera.

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-41.png#center)

Barcode has 4 property fields, namely Label, Limit Only To 1D Barcode, User Can Write Manual, and Required. The following is an explanation of the field properties of the Barcode.

#### 1. Label

The Label functions to set the title of the Barcode input. This label is not required or may be left blank. This label will appear on the Form Fill Page on the Worx website and the Worx mobile app.

#### 2. Restrict to 1D Barcodes Only

The Limit Only To 1D Barcode property functions to set if the barcode that can be scanned is only the one of type 1D Code.

#### 3. User Can Manually Override

The User Can Write Manually Override property functions to set if the text input resulting from the scan can be changed manually.

#### 4. Required

The Required functions to set if this Barcode input is required on the Form Fill page. The checking process will occur on the server and there will be a notification that a Barcode input is required.

You can see a preview of the Barcode in the Preview Section. The result is shown below. There are a label, a scanned text field, and a scan button (with a QR code icon).

![](/img/screenshots/website-application-usage/forms/creating-a-new-form-model/creating-a-new-form-model-42.png#center)
