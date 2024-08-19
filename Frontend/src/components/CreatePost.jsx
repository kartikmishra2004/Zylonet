import React from 'react'

const CreatePost = () => {
  return (
    <div className='ml-[18rem]'>
      <div class="container mx-auto p-4">
        {/* Page Title */}
        <h1 class="text-3xl font-bold text-[black] mb-6">Create Post</h1>

        <form class="grid grid-cols-1 gap-6">
          {/* Title */}
          <div class="p-2">
            <input type="text" id="title" name="title" placeholder="Title" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00b855] focus:ring-[#00b855] focus:ring-opacity-50 p-2" style={{ backgroundColor: "#f6f6f6" }} />
          </div>

          {/* Description and Image Upload */}
          <div class="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Description */}
            <div>
              <textarea id="caption" name="caption" rows="3" placeholder="Description" class="block w-full h-48 rounded-md resize-none border-gray-300 shadow-sm focus:border-[#00b855] focus:ring-[#00b855] focus:ring-opacity-50 p-2" style={{ backgroundColor: "#f6f6f6" }}></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor='example1' class="w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
                <div>
                  <label title='Upload profile' htmlFor="uploadFile1">
                    <div className='cursor-pointer'>
                      <div className="mx-auto max-w-xs">
                        <label htmlFor="example1" className="mb-1 block text-sm font-medium text-gray-700">Add media</label>
                        <input id="example1" type="file" className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#00B855] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-[#22a45e] focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
                      </div>
                    </div>
                  </label>
                </div>
              </label>
            </div>
          </div>

          {/* Registration Button */}
          <div class="col-span-full mt-6 p-2">
            <button type="submit" class="tracking-wide font-semibold bg-[#00B855] text-gray-100 w-max px-5 py-2.5 rounded-lg hover:bg-[#22a45e] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
