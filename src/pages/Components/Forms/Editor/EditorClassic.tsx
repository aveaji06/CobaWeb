import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';;

const EditorClassic = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Classic Editor" pageTitle="Forms" />

                <div className="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                    Notes: <a href="https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html" className="font-medium underline">https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html</a> more details
                </div>

                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Classic CKEditor</h6>
                        <div className="ckeditor-classic text-slate-800">
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditorClassic;
