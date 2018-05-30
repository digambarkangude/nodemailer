Nodemailer Module
Nodemailer is licensed under MIT license. It provides an easy way to send email.

Nodemailer Attachment File
Attachments option in the message object that contains an array of attachment objects. Attachment object’s properties:

filename: the name of the attached file
content: String, Buffer or a Stream contents
path: path to the file
href: URL to the file
contentType: optional content type for the attachment
contentDisposition: optional content disposition type for the attachment, defaults to ‘attachment’
cid: optional content id for using inline images in HTML message source
encoding: Example values: ‘base64’, ‘hex’, ‘binary’ etc
headers: custom headers for the attachment node
raw: optional value that overrides entire contents of current mime node including mime headers
Example case:

var message = {
    ...
    attachments: [
		{	// filename and content type is derived from path	   
            path: '/path/to/file.txt'
        },
        {   // utf-8 string as an attachment
            filename: 'text.txt',
            content: 'JSA-Nodemailer!'
        },
        {   // file on disk as an attachment
            filename: 'text.txt',
            path: '/path/to/file.txt'
        },
        {   // define custom content type for the attachment
            filename: 'text.bin',
            content: 'JSA-Nodemailer!',
            contentType: 'text/plain'
        },
        {   // use URL as an attachment
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        },
        {   // data uri as an attachment
            path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
        },
        {   // use pregenerated MIME node
            raw: 'Content-Type: text/plain\r\n' +
                 'Content-Disposition: attachment;\r\n' +
                 '\r\n' +
                 'JSA-Nodemailer!'
        }
    ]
}

