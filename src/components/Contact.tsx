import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MessageSquare, Instagram, SendHorizontal } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

import { useAutoCapitalize } from '../hooks/useAutoCapitalize';

// Helper to capitalize first letter
function capitalizeFirst(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

type PWKSurveyForm = {
  name: string;
  nationality: string;
  division: string;
  english: string;
  tournaments: string;
  otherClan: string;
  willingTrial: string;
  esportsExp: string;
  groupRules: string;
  leadership: string;
  posters: string;
  youtube: string;
  editing: string;
  nonPlaying: string;
  instaFollower: string;
  instaId: string;
  reason: string;
  expect: string;
  ask: string;
};

// Dropdown options
const yesNoOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' }
];

const englishOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Native speaker', label: 'Native speaker' }
];

const esportsExpOptions = [
  { value: 'No', label: 'No' },
  { value: 'Local', label: 'Local' },
  { value: 'Clan', label: 'Clan' },
  { value: 'Online', label: 'Online' },
  { value: 'Professional', label: 'Professional' }
];

const leadershipOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Maybe', label: 'Maybe' }
];

const editingOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Somewhat', label: 'Somewhat' }
];

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const { handleInputChange } = useAutoCapitalize();
  const { register, handleSubmit, reset, control, watch, formState: { errors } } = useForm<PWKSurveyForm>({
    defaultValues: {
      name: "",
      nationality: "",
      division: "",
      english: "",
      tournaments: "",
      otherClan: "",
      willingTrial: "",
      esportsExp: "",
      groupRules: "",
      leadership: "",
      posters: "",
      youtube: "",
      editing: "",
      nonPlaying: "",
      instaFollower: "",
      instaId: "",
      reason: "",
      expect: "",
      ask: "",
    },
  });

  const instaFollowerValue = watch("instaFollower");

    // Refs for focusing fields on error
  const nameRef = useRef<HTMLInputElement>(null);
  const nationalityRef = useRef<HTMLInputElement>(null);
  const divisionRef = useRef<HTMLInputElement>(null);
  const youtubeRef = useRef<HTMLInputElement>(null);
  const expectRef = useRef<HTMLInputElement>(null);
  // Focus first errored field
  useEffect(() => {
    if (errors.name && nameRef.current) {
      nameRef.current.focus();
    } else if (errors.nationality && nationalityRef.current) {
      nationalityRef.current.focus();
    } else if (errors.division && divisionRef.current) {
      divisionRef.current.focus();
    } else if (errors.youtube && youtubeRef.current) {
      youtubeRef.current.focus();
    } else if (errors.expect && expectRef.current) {
      expectRef.current.focus();
    }
  }, [errors]);
  const onSubmit = (data: PWKSurveyForm) => {
    // Capitalize first letter of every answer
    const cap = (v: string) => capitalizeFirst(v?.trim() || "");
    const msg =
      "📝 PWK New Member Survey" +
      "\n\n🔹 *Basic Information*" +
      `\nFull Name: *${cap(data.name)}*` +
      `\nNationality: ${cap(data.nationality)}` +
      `\nHighest Division Ranking: ${cap(data.division)}` +
      `\nEnglish Proficiency: ${cap(data.english)}` +
      `\nWill participate in tournaments: ${cap(data.tournaments)}` +
      `\nFollower of Insta page: ${cap(data.instaFollower)}` +
      (data.instaFollower === 'Yes' ? `\nInsta ID: instagram.com/${(data.instaId)}` : "") +
      "\n\n🔹 *Clan Commitment*" +
      `\nPart of other Kerala clan: ${cap(data.otherClan)}` +
      `\nWilling for trial/full-time: ${cap(data.willingTrial)}` +
      `\nEsports experience: ${cap(data.esportsExp)}` +
      `\nWill follow group rules: ${cap(data.groupRules)}` +
      "\n\n🔹 *Community & Roles*" +
      `\nLeadership/coordination: ${cap(data.leadership)}` +
      `\nCan design posters: ${cap(data.posters)}` +
      `\nYouTube channel/interest: ${cap(data.youtube)}` +
      `\nEditing skills: ${cap(data.editing)}` +
      `\nWilling for non-playing roles: ${cap(data.nonPlaying)}` +
      "\n\n🔹 Personal Input" +
      `\nWhy join PWK: ${cap(data.reason)}` +
      `\nExpectation from PWK: ${cap(data.expect)}` +
      `\nQuestions for us: ${cap(data.ask)}`;
    const fullMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/919037122605?text=${fullMsg}`, "_blank");
    reset();
    setShowForm(false);
  };



  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join PWK Esports
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your eFootball skills to the next level? Connect with
            us through our social channels.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 text-center">
              <div className="bg-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Join our WhatsApp group for real-time communication, match
                coordination, and team updates.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                type="button"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Join WhatsApp</span>
              </button>
            </div>

            {/* Instagram */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instagram</h3>
              <p className="text-gray-300 mb-6">
                Follow us on Instagram for highlights, behind-the-scenes
                content, and tournament updates.
              </p>
              <a
                href="https://instagram.com/pwkesports"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for WhatsApp form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={() => setShowForm(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative z-50 bg-gray-900 rounded-xl p-8 w-full max-w-md shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Join WhatsApp Group
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 pl-2"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#10B981 #1F2937'
              }}
            >
              {/* Basic Information */}
              <div>
                <h4 className="text-lg font-bold text-emerald-400 mb-4">
                  Basic Information
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Full Name *
                    </label>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          ref={nameRef}
                          value={value}
                          onChange={(e) => handleInputChange(e, onChange)}
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      )}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm block mt-1">{errors.name.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Nationality (If from India, mention state) *
                    </label>
                    <Controller
                      name="nationality"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          ref={nationalityRef}
                          value={value}
                          onChange={(e) => handleInputChange(e, onChange)}
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200"
                          placeholder="e.g. India, Kerala"
                        />
                      )}
                    />
                    {errors.nationality && (
                      <span className="text-red-500 text-sm block mt-1">{errors.nationality.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Highest Division Ranking *
                    </label>
                    <Controller
                      name="division"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          ref={divisionRef}
                          value={value}
                          onChange={(e) => handleInputChange(e, onChange)}
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200"
                          placeholder="Enter your highest ranking"
                        />
                      )}
                    />
                    {errors.division && (
                      <span className="text-red-500 text-sm block mt-1">{errors.division.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Are you proficient in English communication? *
                    </label>
                    <Controller
                      name="english"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={englishOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your English proficiency"
                          error={!!errors.english}
                          required
                        />
                      )}
                    />
                    {errors.english && (
                      <span className="text-red-500 text-sm block mt-1">{errors.english.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Will you actively participate in tournaments? *
                    </label>
                    <Controller
                      name="tournaments"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={yesNoOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your participation preference"
                          error={!!errors.tournaments}
                          required
                        />
                      )}
                    />
                    {errors.tournaments && (
                      <span className="text-red-500 text-sm block mt-1">{errors.tournaments.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Are you a follower of our Insta page?
                    </label>
                    <Controller
                      name="instaFollower"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={yesNoOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select Yes or No"
                        />
                      )}
                    />
                  </div>
                  {instaFollowerValue === 'Yes' && (
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">
                        If yes, mention your Insta ID
                      </label>
                      <input
                        type="text"
                        {...register("instaId")}
                        autoComplete="off"
                        className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200"
                        placeholder="Your Instagram ID"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Clan Commitment */}
              <div>
                <h4 className="text-lg font-bold text-emerald-400 mb-4">
                  Clan Commitment
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Are you actively part of any other clan in Kerala? *
                    </label>
                    <Controller
                      name="otherClan"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={yesNoOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your answer"
                          error={!!errors.otherClan}
                          required
                        />
                      )}
                    />
                    {errors.otherClan && (
                      <span className="text-red-500 text-sm block mt-1">{errors.otherClan.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      If not, are you willing to be trialed and become a full-time member of PWK? *
                    </label>
                    <Controller
                      name="willingTrial"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={yesNoOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your willingness"
                          error={!!errors.willingTrial}
                          required
                        />
                      )}
                    />
                    {errors.willingTrial && (
                      <span className="text-red-500 text-sm block mt-1">{errors.willingTrial.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Have you previously participated in any esports tournaments? *
                    </label>
                    <Controller
                      name="esportsExp"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={esportsExpOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your experience level"
                          error={!!errors.esportsExp}
                          required
                        />
                      )}
                    />
                    {errors.esportsExp && (
                      <span className="text-red-500 text-sm block mt-1">{errors.esportsExp.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Are you willing to follow the group rules? *
                    </label>
                    <Controller
                      name="groupRules"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={yesNoOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your commitment"
                          error={!!errors.groupRules}
                          required
                        />
                      )}
                    />
                    {errors.groupRules && (
                      <span className="text-red-500 text-sm block mt-1">{errors.groupRules.message}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Community & Roles */}
              <div>
                <h4 className="text-lg font-bold text-emerald-400 mb-4">
                  Community & Roles
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Do you like leadership/coordination roles within the group?
                    </label>
                    <Controller
                      name="leadership"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={leadershipOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your preference"
                        />
                      )}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Can you design posters? *
                    </label>
                    <Controller
                      name="posters"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={yesNoOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your design skills"
                          error={!!errors.posters}
                          required
                        />
                      )}
                    />
                    {errors.posters && (
                      <span className="text-red-500 text-sm block mt-1">{errors.posters.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Do you have a YouTube channel? (If not, are you interested in starting one?) *
                    </label>
                    <Controller
                      name="youtube"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          ref={youtubeRef}
                          value={value}
                          onChange={(e) => handleInputChange(e, onChange)}
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200"
                          placeholder="Channel link or 'Interested' or 'No'"
                        />
                      )}
                    />
                    {errors.youtube && (
                      <span className="text-red-500 text-sm block mt-1">{errors.youtube.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Are you good with editing? *
                    </label>
                    <Controller
                      name="editing"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={editingOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your editing skills"
                          error={!!errors.editing}
                          required
                        />
                      )}
                    />
                    {errors.editing && (
                      <span className="text-red-500 text-sm block mt-1">{errors.editing.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Are you willing to help in non-playing roles?
                    </label>
                    <Controller
                      name="nonPlaying"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <CustomDropdown
                          options={leadershipOptions}
                          value={value}
                          onChange={onChange}
                          placeholder="Select your willingness"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Personal Input */}
              <div>
                <h4 className="text-lg font-bold text-emerald-400 mb-4">
                  Personal Input
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Why do you want to join PWK?
                    </label>
                    <textarea
                      {...register("reason")}
                      rows={3}
                      autoComplete="off"
                      className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200 resize-none"
                      placeholder="Share your motivation..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      What do you expect from being a member of PWK?
                    </label>
                    <Controller
                      name="expect"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          ref={expectRef}
                          value={value}
                          onChange={(e) => handleInputChange(e, onChange)}
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200"
                          placeholder="Fun / Competition / Learning / Leadership / Other"
                        />
                      )}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Do you have anything to ask us?
                    </label>
                    <textarea
                      {...register("ask")}
                      rows={3}
                      autoComplete="off"
                      className="w-full px-3 py-2 border border-emerald-500 bg-gray-800 text-white rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 transition-all duration-200 resize-none"
                      placeholder="Any questions for us..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <SendHorizontal className="h-5 w-5" />
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;